import type { Metadata } from "next";
import "@/app/style/travelTourism.css";
import TravelHeader from "@/app/components/TravelHeader";
import TravelLeadForm from "@/app/components/TravelLeadForm";
import GmbFaqs from "@/app/components/GmbFaqs";
import HashScrollLink from "@/app/components/HashScrollLink";
import { SITE_CONTACT, SITE_SOCIAL_LINKS } from "@/shared/siteConfig";
import { buildBreadcrumbJsonLd, SITE_URL } from "@/shared/seoSchemas";
import Image from "next/image";
import Link from "next/link";
import { FaCircleCheck } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import {
  FiArrowUpRight,
  FiCalendar,
  FiGlobe,
  FiLayout,
  FiMail,
  FiMapPin,
  FiPenTool,
  FiPercent,
  FiPhoneCall,
  FiShield,
  FiTarget,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";
import { LuPlaneTakeoff } from "react-icons/lu";
import { RiLineChartLine } from "react-icons/ri";

const PAGE_PATH = "/services/travel-and-tourism-marketing-agency";

export const metadata: Metadata = {
  title: "Travel & Tourism Marketing Agency That Books Trips",
  description:
    "Zonic Media is a travel and tourism marketing agency driving direct bookings for hotels, tour operators, and DMOs with travel SEO, paid media, and web design.",
  keywords: [
    "travel marketing agency",
    "tourism marketing agency",
    "travel and tourism marketing agency",
    "travel digital marketing agency",
    "hotel marketing agency",
    "destination marketing agency",
    "tour operator marketing",
    "travel SEO agency",
    "tourism advertising agency",
    "marketing for travel companies",
  ],
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zonic Media — Marketing Agency for Small & Mid-Size Businesses",
      },
    ],
    title: "Travel & Tourism Marketing Agency That Books Trips | Zonic Media",
    description:
      "Travel and tourism marketing built around direct bookings — travel SEO, paid media, destination content, and web design for hotels, tour operators, and DMOs.",
    url: PAGE_PATH,
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Travel & Tourism Marketing Agency", url: PAGE_PATH },
]);

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Travel & Tourism Marketing",
  serviceType: "Travel and Tourism Digital Marketing",
  url: `${SITE_URL}${PAGE_PATH}`,
  description:
    "Full-funnel travel and tourism marketing — travel SEO, paid media, destination content, social campaigns, and booking-optimized websites for hotels, tour operators, DMOs, and travel brands.",
  provider: {
    "@type": "Organization",
    "@id": "https://www.zonicllc.com/#organization",
    name: "Zonic Media",
    url: "https://www.zonicllc.com",
    telephone: "+1-302-726-9736",
    address: {
      "@type": "PostalAddress",
      streetAddress: "8 The Green, STE B",
      addressLocality: "Dover",
      addressRegion: "DE",
      postalCode: "19901",
      addressCountry: "US",
    },
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Travel & Tourism Marketing Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Travel SEO" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Paid Media for Travel Brands" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Destination Content Marketing" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Travel Website Design & Booking UX" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Social Media & Influencer Campaigns" },
      },
    ],
  },
};

const TravelFaqs = [
  {
    question: "What does a travel and tourism marketing agency actually do?",
    answer:
      "A travel marketing agency fills the gap between wanderlust and a confirmed booking. We handle travel SEO so your brand shows up while people research destinations. We run paid media that captures high-intent searches. We create content that sells the experience and booking flows that convert lookers into travelers. The result is a system built around your seasons and your booking engine rather than one-off campaigns.",
  },
  {
    question: "Can you help us reduce our dependence on OTAs like Booking.com and Expedia?",
    answer:
      "Yes. That is usually the first goal we set. OTA commissions of 15–25% quietly eat the margin on every stay or tour. We grow your direct channel with travel SEO and branded search protection. We then add remarketing and email flows plus a booking experience that gives travelers a real reason to book direct. OTAs stay part of the mix without being the whole mix.",
  },
  {
    question: "How do you handle seasonality in travel campaigns?",
    answer:
      "We plan marketing around your booking windows instead of the calendar month. Travelers research 30 to 120 days before they book. Demand generation runs ahead of your season while high-intent search and remarketing scale up as booking windows open. In the off-season we shift budget toward packages and nearby drive markets instead of letting spend idle.",
  },
  {
    question: "How much does travel and tourism marketing cost?",
    answer:
      "It depends on scope. A single-property hotel needs a different engine than a multi-destination tour operator or a DMO. After a discovery call we quote a flat monthly engagement that covers strategy and reporting with no hourly billing. You will always know what goes to ads versus agency work and what each channel returns in bookings.",
  },
  {
    question: "Who do you work with — hotels, tour operators, or destinations?",
    answer:
      "All three plus the wider travel ecosystem. That includes boutique hotels, vacation rentals, tour operators, cruise companies, travel agencies, and destination marketing organizations. The playbook adapts to each one. A resort optimizes for direct stays while a DMO optimizes for visitation. The goal is always measurable and bookable demand.",
  },
  {
    question: "How soon should we expect results?",
    answer:
      "Paid campaigns typically produce measurable booking activity within the first 30 to 60 days. Travel SEO and destination content compound more slowly. Meaningful movement usually shows in three to six months and keeps building after that. We report both tracks side by side every month so you can watch quick wins fund the long-term asset.",
  },
];

const travelFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE_URL}${PAGE_PATH}`,
  mainEntity: TravelFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const HeroChips = [
  "Hotels & Resorts",
  "Tour Operators",
  "DMOs & Tourism Boards",
  "Vacation Rentals",
];

const MarqueeItems = [
  "Travel SEO",
  "Direct Bookings",
  "Destination Content",
  "Paid Media",
  "Booking Funnels",
  "Tourism Campaigns",
  "Guest Retention",
];

const AboutChecks = [
  "Direct-booking growth strategy",
  "Seasonal demand planning",
  "Full-funnel campaign tracking",
  "Booking-engine-aware websites",
];

const ServiceCards = [
  {
    icon: <FiMapPin aria-hidden="true" />,
    title: "Local SEO Agency",
    desc: (
      <>
        We get your business ranking in the{" "}
        <Link href="/services/local-seo-for-home-services" className="tt-inline-link">
          Google Map Pack
        </Link>{" "}
        so nearby customers find you first — turning local searches into steady
        calls and walk-ins, not just website traffic.
      </>
    ),
  },
  {
    icon: <FiGlobe aria-hidden="true" />,
    title: "Google Business Profile",
    desc: (
      <>
        Your profile is your best free lead source. We handle{" "}
        <Link href="/services/gmb-optimization" className="tt-inline-link">
          Google Business Profile optimization
        </Link>{" "}
        to rank and generate reviews, and when a profile is suspended, we help{" "}
        <Link href="/services/gmb-reinstatement-help" className="tt-inline-link">
          reinstate suspended profiles
        </Link>
        . We&apos;ve recovered 500+ profiles for businesses like yours.
      </>
    ),
  },
  {
    icon: <FiTrendingUp aria-hidden="true" />,
    title: "PPC Ads Agency",
    desc: (
      <>
        <Link href="/services/google-ads" className="tt-inline-link">
          Google Ads campaigns
        </Link>{" "}
        built to capture customers searching right now — managed for
        cost-per-lead, not wasted clicks, so every dollar of a tighter budget
        works harder.
      </>
    ),
  },
  {
    icon: <FiLayout aria-hidden="true" />,
    title: "Website Design",
    desc: (
      <>
        Fast,{" "}
        <Link href="/services/web-design" className="tt-inline-link">
          mobile-first websites
        </Link>{" "}
        that make a small business look established and turn visitors into
        booked jobs — with the technical SEO foundation built in from day one.
      </>
    ),
  },
  {
    icon: <FiPenTool aria-hidden="true" />,
    title: "Graphic Design",
    desc: "Professional graphics for ads, social, signage, and print that keep a growing brand looking consistent and credible everywhere customers see you.",
  },
  {
    icon: <FiShield aria-hidden="true" />,
    title: "Logo Design",
    desc: "A distinctive logo and brand identity that earns instant recognition and trust — giving a small business the polished first impression bigger competitors rely on.",
  },
];

const BentoCards = [
  {
    icon: <FiPercent aria-hidden="true" />,
    title: "15–25% commission recovered",
    desc: "Every booking moved from an OTA to your own engine keeps the commission in your pocket.",
  },
  {
    icon: <FiCalendar aria-hidden="true" />,
    title: "30–120 day booking window",
    desc: "Travelers research for months. Your brand stays visible across the entire journey.",
  },
  {
    icon: <FiShield aria-hidden="true" />,
    title: "Branded search protection",
    desc: "We stop OTAs from intercepting travelers who were already searching for you by name.",
  },
  {
    icon: <FiTrendingUp aria-hidden="true" />,
    title: "Seasonal budget shifts",
    desc: "Spend follows your booking windows. Heavier ahead of peak season and smarter in the shoulder months.",
  },
  {
    icon: <RiLineChartLine aria-hidden="true" />,
    title: "Bookings-first reporting",
    desc: "Reports read in revenue and cost per booking rather than clicks and impressions.",
  },
  {
    icon: <FiUsers aria-hidden="true" />,
    title: "Guest data you own",
    desc: "Direct bookings build the email and CRM lists that OTAs never hand over.",
  },
];

const EngineCards = [
  {
    icon: <LuPlaneTakeoff aria-hidden="true" />,
    title: "Direct booking funnels",
    desc: "Branded search protection, rate-parity messaging, and remarketing that route travelers to your booking engine instead of an OTA's.",
  },
  {
    icon: <FiCalendar aria-hidden="true" />,
    title: "Seasonal demand planning",
    desc: "Campaigns mapped to your booking windows. Demand generation runs ahead of the season and high-intent capture scales when windows open.",
  },
  {
    icon: <FiMapPin aria-hidden="true" />,
    title: "Destination content hubs",
    desc: "Guides and itineraries that earn rankings year-round and send well-researched travelers to your offer pages.",
  },
  {
    icon: <FaStar aria-hidden="true" />,
    title: "Reviews & Reputation",
    desc: "Review velocity on Google and TripAdvisor with reputation flows that keep your score climbing while you sleep.",
  },
];

const ProcessSteps = [
  {
    num: "01",
    title: "Discovery & market audit",
    desc: "We map your destinations, seasons, and booking data. We also study who outranks you and where OTAs intercept your travelers before a dollar is spent.",
  },
  {
    num: "02",
    title: "Growth itinerary",
    desc: "A channel-by-channel plan built around your booking windows. It covers what runs ahead of the season and what fills the shoulder months.",
  },
  {
    num: "03",
    title: "Launch & creative production",
    desc: "Campaigns and landing pages go live with tracking wired to actual bookings rather than clicks or impressions.",
  },
  {
    num: "04",
    title: "Optimize, report & scale",
    desc: "Monthly reporting in terms your team recognizes: direct revenue, cost per booking, and OTA share. Budget then shifts to what is working.",
  },
];

const WhyCards = [
  {
    icon: <RiLineChartLine aria-hidden="true" />,
    title: "Measured in bookings, not clicks",
    desc: "Every campaign is tracked through to reservations and revenue. Reports read like a booking ledger instead of a vanity-metrics slideshow.",
  },
  {
    icon: <LuPlaneTakeoff aria-hidden="true" />,
    title: "Built for how travelers decide",
    desc: "Travelers dream, research, compare, and then book. Our funnels mirror that real journey instead of forcing a generic ad sequence.",
  },
  {
    icon: <FiCalendar aria-hidden="true" />,
    title: "A partner for every season",
    desc: "The strategy adapts each quarter across high season and off-season. Momentum from one season funds the next.",
  },
];

const NicheChips = [
  "Boutique Hotels & Resorts",
  "Tour & Activity Operators",
  "Destination Marketing Organizations",
  "Vacation Rental Portfolios",
  "Cruise & Charter Companies",
  "Adventure & Eco Tourism",
  "Travel Agencies & Advisors",
  "Attractions & Experiences",
];

const GrowCards = [
  {
    href: "/services/google-ads",
    icon: <FiTarget aria-hidden="true" />,
    title: "Google Ads Management",
    desc: "High-intent search campaigns managed for return. This is the paid engine behind many of our travel growth plans.",
    cta: "Explore Google Ads",
  },
  {
    href: "/services/web-design",
    icon: <FiLayout aria-hidden="true" />,
    title: "Web Design",
    desc: "Conversion-first websites built to carry traffic from every campaign. Fast and wired for measurement.",
    cta: "See web design",
  },
  {
    href: "/services/gmb-optimization",
    icon: <FiMapPin aria-hidden="true" />,
    title: "Google Business Profile Optimization",
    desc: "Travelers check the map before they book. We make sure your profile, photos, and reviews win that glance.",
    cta: "Optimize your profile",
  },
];


type TravelImageAsset = {
  src: string;
  alt: string;
};

type TravelPostcard = TravelImageAsset & {
  label: string;
};

const TravelImages = {
  destinationHero: {
    src: "/images/travel-tourism/destination-hero.webp",
    alt: "Boutique coastal resort terrace overlooking calm blue water",
  },
  travelerMoment: {
    src: "/images/travel-tourism/traveler-moment.webp",
    alt: "Traveler planning a trip with a map and smartphone at a cafe table",
  },
  resortAerial: {
    src: "/images/travel-tourism/direct-booking-revenue-dashboard.webp",
    alt: "Hotel booking analytics dashboard on a resort terrace overlooking the ocean",
  },
  travelerBooking: {
    src: "/images/travel-tourism/traveler-direct-booking-checkout.webp",
    alt: "Traveler completing a direct hotel booking on a smartphone beside luggage",
  },
  teamStrategy: {
    src: "/images/travel-tourism/team-strategy-session.webp",
    alt: "Travel marketing team reviewing destination campaign materials together",
  },
} satisfies Record<string, TravelImageAsset>;

const PostcardImages: TravelPostcard[] = [
  {
    label: "Coastal resort",
    src: "/images/travel-tourism/postcard-coastal-resort.webp",
    alt: "Beachfront coastal resort with palms and lounge chairs",
  },
  {
    label: "Mountain lodge",
    src: "/images/travel-tourism/postcard-mountain-lodge.webp",
    alt: "Mountain lodge beside an alpine lake and evergreen forest",
  },
  {
    label: "City break",
    src: "/images/travel-tourism/postcard-city-break.webp",
    alt: "Sunny walkable city street with cafe tables and boutique hotel facade",
  },
  {
    label: "Island escape",
    src: "/images/travel-tourism/postcard-island-escape.webp",
    alt: "Quiet tropical island shoreline with clear water and palm trees",
  },
  {
    label: "Safari & wildlife",
    src: "/images/travel-tourism/postcard-safari-wildlife.webp",
    alt: "Safari vehicle on a savanna track with giraffes in the distance",
  },
  {
    label: "Culinary tour",
    src: "/images/travel-tourism/postcard-culinary-tour.webp",
    alt: "Regional dishes served at an outdoor food tourism table",
  },
  {
    label: "Adventure trek",
    src: "/images/travel-tourism/postcard-adventure-trek.webp",
    alt: "Hikers following a mountain trail above a wide valley",
  },
  {
    label: "Cruise deck",
    src: "/images/travel-tourism/postcard-cruise-deck.webp",
    alt: "Cruise ship deck with lounge chairs overlooking the ocean at sunset",
  },
];

function TravelImage({
  className,
  image,
  sizes,
}: {
  className: string;
  image: TravelImageAsset;
  sizes: string;
}) {
  return (
    <div className={`tt-img ${className}`}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        className="tt-img-el"
      />
    </div>
  );
}

function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(travelFaqJsonLd) }}
      />

      <div className="tt-page">
        <TravelHeader />

        <main>
          {/* 1. Hero — video background + glass search-bar form */}
          <section className="tt-hero">
            <video
              className="tt-hero-video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
            >
              <source src="/video/travel.mp4" type="video/mp4" />
            </video>
            <div className="tt-hero-overlay" aria-hidden="true" />

            <div className="tt-container tt-hero-content">
              <p className="tt-hero-eyebrow">For Hotels, Tour Operators &amp; DMOs</p>
              <h1 className="tt-hero-h1">
                The Travel and Tourism Marketing Agency That Turns Wanderlust
                into <span className="tt-hero-hl">Booked Trips</span>
              </h1>
              <p className="tt-hero-sub">
                <Link href="/" className="tt-inline-link">
                  Zonic Media
                </Link>{" "}
                grows hotels and tour operators with travel SEO, paid media,
                and booking-ready websites. More travelers book direct and fewer
                bookings leak to OTA commissions.
              </p>

              <div className="tt-hero-badges">
                {/* Self-hosted Clutch badge — the live iframe embed is
                    behind a Cloudflare challenge and breaks randomly. */}
                <a
                  href="https://clutch.co/profile/zonic-media?badge=11431"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  <Image
                    className="tt-hero-badge-widget"
                    width={90}
                    height={90}
                    src="/images/clutch-top-company-2026.png"
                    alt="Top Clutch Digital Marketing Company Delaware 2026"
                    style={{ objectFit: "contain" }}
                  />
                </a>
                <Image
                  className="tt-hero-badge-widget"
                  width={90}
                  height={90}
                  src="/images/Partner.png"
                  alt="Yelp Advertising Partner"
                />
                <a
                  href="https://www.trustpilot.com/review/zonicllc.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="tt-hero-trust-badge"
                    width={110}
                    height={51}
                    src="/images/Trustpilot-Logo.png"
                    alt="Trustpilot Reviews"
                  />
                </a>
              </div>

              <TravelLeadForm />

              <div className="tt-hero-chips">
                {HeroChips.map((chip) => (
                  <span className="tt-hero-chip" key={chip}>
                    <FaCircleCheck aria-hidden="true" />
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* 2. Keyword marquee strip */}
          <div className="tt-marquee" aria-hidden="true">
            <div className="tt-marquee-track">
              {[0, 1].map((copy) => (
                <span className="tt-marquee-group" key={copy}>
                  {MarqueeItems.map((item) => (
                    <span className="tt-marquee-item" key={item}>
                      {item} <LuPlaneTakeoff aria-hidden="true" />
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>

          {/* 3. About / the booking journey */}
          <section className="tt-about">
            <div className="tt-container">
              <div className="tt-about-grid">
                <div className="tt-about-visual">
                  <TravelImage
                    className="tt-ph-about-1"
                    image={TravelImages.destinationHero}
                    sizes="(max-width: 991px) 74vw, 30vw"
                  />
                  <TravelImage
                    className="tt-ph-about-2"
                    image={TravelImages.travelerMoment}
                    sizes="(max-width: 991px) 56vw, 24vw"
                  />
                </div>
                <div className="tt-about-copy">
                  <p className="tt-eyebrow">The Booking Journey</p>
                  <h2 className="tt-h2">
                    Travelers Plan for Months.{" "}
                    <span className="tt-hl">You Only Get One Glance.</span>
                  </h2>
                  <p className="tt-lead">
                    A traveler researches a trip for 30 to 120 days. They
                    scroll reels, read guides, and compare a dozen open tabs.
                    Then the decision happens in seconds. The brand that showed
                    up at every step with the clearest story and the easiest
                    booking flow wins the reservation.
                  </p>
                  <p className="tt-lead">
                    As a travel and tourism marketing agency backed by a{" "}
                    <Link href="/services" className="tt-inline-link">
                      full-service marketing
                    </Link>{" "}
                    team, we build your presence across that whole journey.
                    From the first daydream
                    search to the confirmation email, the goal stays the same:
                    the booking lands on your engine instead of an OTA&apos;s.
                  </p>
                  <div className="tt-checks">
                    {AboutChecks.map((check) => (
                      <div className="tt-check" key={check}>
                        <FaCircleCheck aria-hidden="true" />
                        {check}
                      </div>
                    ))}
                  </div>
                  <HashScrollLink href="#tt-contact" className="tt-btn" offset={120}>
                    Plan My Growth Route
                    <span className="tt-btn-circ">
                      <FiArrowUpRight aria-hidden="true" />
                    </span>
                  </HashScrollLink>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Services */}
          <section className="tt-services" id="tt-services">
            <div className="tt-container">
              <div className="tt-sec-head-center">
                <p className="tt-eyebrow">What We Do</p>
                <h2 className="tt-h2">
                  Tourism Marketing Services for the Full Trip-Planning Funnel
                </h2>
              </div>
              <div className="tt-cards">
                {ServiceCards.map((card) => (
                  <article className="tt-card" key={card.title}>
                    <span className="tt-card-icon">{card.icon}</span>
                    <h3>{card.title}</h3>
                    <p>{card.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* 5. Why it matters — bento grid banner */}
          <section className="tt-band">
            <div className="tt-container">
              <div className="tt-sec-head-center">
                <p className="tt-eyebrow">Why It Matters</p>
                <h2 className="tt-h2">
                  Every Direct Booking is Margin You Keep
                </h2>
                <p className="tt-lead">
                  OTAs are a distribution channel rather than a growth
                  strategy. When your own site ranks and your booking flow
                  converts, each reservation keeps the commission that used to
                  leave with a middleman.
                </p>
              </div>

              <div className="tt-bento">
                <div className="tt-bento-cell tt-bento-img tt-bento-img-tall">
                  <TravelImage
                    className="tt-ph-bento"
                    image={TravelImages.resortAerial}
                    sizes="(max-width: 991px) 100vw, 50vw"
                  />
                </div>
                {BentoCards.map((card) => (
                  <article className="tt-bento-cell" key={card.title}>
                    <span className="tt-bento-icon">{card.icon}</span>
                    <h3>{card.title}</h3>
                    <p>{card.desc}</p>
                  </article>
                ))}
                <div className="tt-bento-cell tt-bento-img tt-bento-img-wide">
                  <TravelImage
                    className="tt-ph-bento"
                    image={TravelImages.travelerBooking}
                    sizes="(max-width: 991px) 100vw, 50vw"
                  />
                </div>
              </div>

            </div>
          </section>

          {/* 6. Direct booking engine */}
          <section className="tt-engine">
            <div className="tt-container">
              <div className="tt-sec-head-center">
                <p className="tt-eyebrow">The Direct Booking Engine</p>
                <h2 className="tt-h2">
                  A System Built to Win the Booking, Not Just the Click
                </h2>
                <p className="tt-lead">
                  Most travel marketing stops at traffic. Ours follows the
                  traveler all the way to the confirmation page through four
                  connected parts. Each one does a single job.
                </p>
              </div>
              <div className="tt-engine-cards">
                {EngineCards.map((card) => (
                  <article className="tt-engine-card" key={card.title}>
                    <span className="tt-card-icon">{card.icon}</span>
                    <h3>{card.title}</h3>
                    <p>{card.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* 7. Postcard gallery marquee */}
          <section className="tt-gallery">
            <div className="tt-container">
              <div className="tt-sec-head-center">
                <p className="tt-eyebrow">Every Kind of Trip</p>
                <h2 className="tt-h2">
                  Destination Marketing Campaigns for Every Trip You Sell
                </h2>
              </div>
            </div>
            <div className="tt-gallery-marquee">
              <div className="tt-gallery-track">
                {[0, 1].map((copy) => (
                  <div className="tt-gallery-group" key={copy} aria-hidden={copy === 1}>
                    {PostcardImages.map((card) => (
                      <figure className="tt-postcard" key={`${copy}-${card.label}`}>
                        <TravelImage
                          className="tt-ph-postcard"
                          image={card}
                          sizes="250px"
                        />
                        <figcaption>{card.label}</figcaption>
                      </figure>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 8. Process */}
          <section className="tt-process" id="tt-process">
            <div className="tt-container">
              <div className="tt-sec-head-center">
                <p className="tt-eyebrow">How It Works</p>
                <h2 className="tt-h2">Your Growth Itinerary, in Four Legs</h2>
              </div>
              <div className="tt-steps">
                {ProcessSteps.map((step) => (
                  <div className="tt-step" key={step.num}>
                    <span className="tt-step-num" aria-hidden="true">
                      {step.num}
                    </span>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 9. Why us + CTA banner — banner 2 */}
          <section className="tt-why" id="tt-why">
            <div className="tt-container">
              <div className="tt-sec-head-center">
                <p className="tt-eyebrow">Why Zonic Media</p>
                <h2 className="tt-h2">
                  A Tourism Marketing Partner That Thinks in Seasons and Margins
                </h2>
              </div>
              <div className="tt-why-cards">
                {WhyCards.map((card) => (
                  <article className="tt-why-card" key={card.title}>
                    <span className="tt-card-icon">{card.icon}</span>
                    <h3>{card.title}</h3>
                    <p>{card.desc}</p>
                  </article>
                ))}
              </div>
              <div className="tt-why-banner">
                <div className="tt-why-banner-media">
                  <TravelImage
                    className="tt-ph-banner"
                    image={TravelImages.teamStrategy}
                    sizes="(max-width: 991px) 100vw, 40vw"
                  />
                </div>
                <div className="tt-why-banner-copy">
                  <p className="tt-eyebrow">Free Strategy Call</p>
                  <h3>Not Sure Which Channel Should Come First?</h3>
                  <p>
                    Tell us your destinations, seasons, and booking goals. On a
                    free call a strategist maps the channels worth your budget
                    and flags the ones that are not.
                  </p>
                  <HashScrollLink href="#tt-contact" className="tt-btn" offset={120}>
                    Book a Free Strategy Call
                    <span className="tt-btn-circ">
                      <FiArrowUpRight aria-hidden="true" />
                    </span>
                  </HashScrollLink>
                </div>
              </div>
            </div>
          </section>

          {/* 10. Who we serve */}
          <section className="tt-niches">
            <div className="tt-container">
              <div className="tt-sec-head-center">
                <p className="tt-eyebrow">Who We Serve</p>
                <h2 className="tt-h2">
                  Travel Marketing for Every Corner of the Industry
                </h2>
                <p className="tt-lead">
                  From a twelve-room boutique hotel to a statewide destination
                  marketing organization, the engagement adapts to how your
                  business actually books. Everything runs remotely, so we work
                  with{" "}
                  <Link href="/industries" className="tt-inline-link">
                    travel brands
                  </Link>{" "}
                  across the United States and beyond.
                </p>
              </div>
              <div className="tt-chips">
                {NicheChips.map((chip) => (
                  <span className="tt-chip" key={chip}>
                    {chip}
                  </span>
                ))}
              </div>
              <div className="tt-niches-cta">
                <HashScrollLink href="#tt-contact" className="tt-btn" offset={120}>
                  Get My Growth Plan
                  <span className="tt-btn-circ">
                    <FiArrowUpRight aria-hidden="true" />
                  </span>
                </HashScrollLink>
                <a href={SITE_CONTACT.phoneHref} className="tt-btn tt-btn-outline">
                  <FiPhoneCall aria-hidden="true" />
                  Call {SITE_CONTACT.phoneDisplay}
                </a>
              </div>
            </div>
          </section>

          {/* 11. FAQs */}
          <section className="tt-faqs" id="tt-faqs">
            <div className="tt-container">
              <div className="tt-faqs-grid">
                <div>
                  <p className="tt-eyebrow">FAQs</p>
                  <h2 className="tt-h2">
                    Everything Travel Brands Ask a Travel Marketing Agency
                  </h2>
                  <p className="tt-lead">
                    Straight answers on OTAs, seasonality, pricing, and
                    timelines. If your question is not covered here, send it
                    through the form and a strategist will reply.
                  </p>
                  <HashScrollLink href="#tt-contact" className="tt-btn" offset={120}>
                    Ask About Your Brand
                    <span className="tt-btn-circ">
                      <FiArrowUpRight aria-hidden="true" />
                    </span>
                  </HashScrollLink>
                </div>
                <div>
                  <GmbFaqs items={TravelFaqs} />
                </div>
              </div>
            </div>
          </section>

          {/* 12. Grow further — internal links */}
          <section className="tt-grow">
            <div className="tt-container">
              <div className="tt-sec-head-center">
                <p className="tt-eyebrow">Grow Further</p>
                <h2 className="tt-h2">
                  The Services Powering Our Travel Growth Plans
                </h2>
              </div>
              <div className="tt-grow-cards">
                {GrowCards.map((card) => (
                  <Link href={card.href} className="tt-grow-card" key={card.href}>
                    <span className="tt-card-icon">{card.icon}</span>
                    <h3>{card.title}</h3>
                    <p>{card.desc}</p>
                    <span className="tt-grow-link">
                      {card.cta} <FiArrowUpRight aria-hidden="true" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* 13. Final CTA — full-width banner touching the footer */}
          <section className="tt-cta">
              <div className="tt-cta-panel">
                <p className="tt-eyebrow tt-eyebrow-light">Ready When You Are</p>
                <h2 className="tt-h2 tt-h2-light">
                  Let&apos;s Fill Your Next Season with Direct Bookings
                </h2>
                <p className="tt-lead tt-lead-light">
                  Share your travel brand below and we will come back with a
                  channel-by-channel growth plan. It is free and yours to keep
                  either way.
                </p>
                <div className="tt-cta-actions">
                  <HashScrollLink
                    href="#tt-contact"
                    className="tt-btn tt-btn-white"
                    offset={120}
                  >
                    Get My Growth Plan
                    <span className="tt-btn-circ">
                      <FiArrowUpRight aria-hidden="true" />
                    </span>
                  </HashScrollLink>
                  <a href={SITE_CONTACT.phoneHref} className="tt-btn tt-btn-glass">
                    <FiPhoneCall aria-hidden="true" />
                    Call {SITE_CONTACT.phoneDisplay}
                  </a>
                </div>
              </div>
          </section>

          {/* 14. Contact */}
          <section className="tt-contact" id="tt-contact">
            <div className="tt-container">
              <div className="tt-contact-grid">
                <div className="tt-contact-info">
                  <p className="tt-eyebrow">Contact Us</p>
                  <h2 className="tt-h2">
                    Tell Us Where You Want More Bookings
                  </h2>
                  <p className="tt-lead">
                    Share a few details about your travel brand. A strategist
                    replies within one business day with clear next steps for
                    your seasons and your booking goals.
                  </p>
                  <div className="tt-contact-cards">
                    <a href={SITE_CONTACT.phoneHref} className="tt-contact-card">
                      <span className="tt-contact-card-icon">
                        <FiPhoneCall aria-hidden="true" />
                      </span>
                      <span className="tt-contact-card-txt">
                        <small>Call a strategist</small>
                        <strong>{SITE_CONTACT.phoneDisplay}</strong>
                      </span>
                    </a>
                    <a href={SITE_CONTACT.emailHref} className="tt-contact-card">
                      <span className="tt-contact-card-icon">
                        <FiMail aria-hidden="true" />
                      </span>
                      <span className="tt-contact-card-txt">
                        <small>Email us anytime</small>
                        <strong>{SITE_CONTACT.email}</strong>
                      </span>
                    </a>
                    <a
                      href={SITE_CONTACT.mapHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tt-contact-card"
                    >
                      <span className="tt-contact-card-icon">
                        <FiMapPin aria-hidden="true" />
                      </span>
                      <span className="tt-contact-card-txt">
                        <small>Visit our office</small>
                        <strong>{SITE_CONTACT.address}</strong>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="tt-contact-form">
                  <TravelLeadForm id="tt-contact-form" variant="stacked" />
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="tt-footer">
          <div className="tt-container">
            <div className="tt-footer-grid">
              <div className="tt-footer-brand">
                <Link href="/" aria-label="Zonic Media — home">
                  <Image
                    src="/images/logo.webp"
                    alt="Zonic Media"
                    width={160}
                    height={44}
                  />
                </Link>
                <p>
                  Zonic Media is a digital growth agency helping travel and
                  tourism brands turn trip planners into direct bookings.
                </p>
                <div className="tt-footer-social">
                  {SITE_SOCIAL_LINKS.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="tt-footer-col">
                <h3>On This Page</h3>
                <ul>
                  <li>
                    <HashScrollLink href="#tt-services" offset={96}>
                      Services
                    </HashScrollLink>
                  </li>
                  <li>
                    <HashScrollLink href="#tt-process" offset={96}>
                      Process
                    </HashScrollLink>
                  </li>
                  <li>
                    <HashScrollLink href="#tt-why" offset={96}>
                      Why Us
                    </HashScrollLink>
                  </li>
                  <li>
                    <HashScrollLink href="#tt-faqs" offset={96}>
                      FAQs
                    </HashScrollLink>
                  </li>
                </ul>
              </div>

              <div className="tt-footer-col">
                <h3>Explore Zonic</h3>
                <ul>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/services">All Services</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/contact-us">Contact</Link>
                  </li>
                </ul>
              </div>

              <div className="tt-footer-col">
                <h3>Talk to Us</h3>
                <ul className="tt-footer-contact">
                  <li>
                    <a href={SITE_CONTACT.phoneHref}>
                      <FiPhoneCall aria-hidden="true" />
                      {SITE_CONTACT.phoneDisplay}
                    </a>
                  </li>
                  <li>
                    <a href={SITE_CONTACT.emailHref}>
                      <FiMail aria-hidden="true" />
                      {SITE_CONTACT.email}
                    </a>
                  </li>
                  <li>
                    <a
                      href={SITE_CONTACT.mapHref}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiMapPin aria-hidden="true" />
                      {SITE_CONTACT.address}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="tt-footer-bottom">
              <p>© {new Date().getFullYear()} Zonic Media LLC. All rights reserved.</p>
              <div className="tt-footer-legal">
                <Link href="/legal/privacy-policy">Privacy Policy</Link>
                <Link href="/legal/terms-conditions">Terms &amp; Conditions</Link>
                <Link href="/legal/refund-policy">Refund Policy</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Page;
