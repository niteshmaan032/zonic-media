import ClutchWidget from "@/app/components/ClutchWidget";
import Footer from "@/app/components/Footer";
import GmbFaqs from "@/app/components/GmbFaqs";
import ServiceLeadForm from "@/app/components/ServiceLeadForm";
import HashScrollLink from "@/app/components/HashScrollLink";
import HomeSeoMarquee from "@/app/components/HomeSeoMarquee";
import SharedLottiePlayer from "@/app/components/SharedLottiePlayer";
import WhyHomeSeo from "@/app/components/WhyHomeSeo";
import "@/app/style/localSeoHome.css";
import { SITE_CONTACT } from "@/shared/siteConfig";
import { buildBreadcrumbJsonLd, buildServiceJsonLd } from "@/shared/seoSchemas";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Col, Row } from "react-bootstrap";
import {
  FaCalendarCheck,
  FaChartLine,
  FaClipboardList,
  FaLayerGroup,
  FaPenNib,
  FaRobot,
  FaSearchDollar,
  FaTools,
  FaTrophy,
  FaUser,
  FaUserCheck,
} from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoCall, IoCallSharp } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";

const SeoHomeFaqs = [
  {
    question: "What is Local SEO for Home Service Businesses?",
    answer:
      "Local SEO is the process of improving your online visibility so customers can find your business on Google Search and Google Maps when searching for nearby services like plumbing, HVAC, roofing, or electrical work.",
  },
  {
    question: "Why is Local SEO Important for Home Service Companies?",
    answer:
      "Local SEO helps home service companies generate more calls, leads, and booked jobs by appearing in front of customers who are actively searching for services in their area.",
  },
  {
    question: "How Long Does Local SEO Take to Show Results?",
    answer:
      "Most businesses begin seeing improvements within 2 to 3 months, while stronger rankings and lead growth typically happen within 4 to 6 months depending on competition.",
  },
  {
    question: "Can Local SEO Help Me Get More Phone Calls?",
    answer:
      "Yes. Local SEO improves your visibility in local search results and Google Maps, helping more customers call your business when they need immediate service.",
  },
  {
    question: "What Types of Businesses Benefit from Local SEO?",
    answer:
      "Roofers, HVAC companies, plumbers, electricians, landscapers, pest control companies, remodelers, and most home service businesses benefit from local SEO.",
  },
  {
    question: "What is Included in Local SEO Services?",
    answer:
      "Local SEO services usually include Google Business Profile optimization, keyword targeting, citation building, on-page SEO, review strategies, backlink building, and monthly reporting.",
  },
  {
    question: "How Does Google Business Profile Help Local SEO?",
    answer:
      "A well-optimized Google Business Profile improves your chances of ranking in Google Maps, generating calls, collecting reviews, and attracting nearby customers.",
  },
  {
    question: "Is Local SEO Better Than Paid Ads?",
    answer:
      "Local SEO provides long-term visibility and sustainable leads, while paid ads generate faster short-term traffic. Many businesses use both for best results.",
  },
  {
    question: "How Much Does Local SEO Cost for Home Service Businesses?",
    answer:
      "Pricing depends on your market competition, service areas, and goals. Most local SEO campaigns range from basic single-location plans to advanced multi-city growth campaigns.",
  },
  {
    question: "Why Choose Zonic Media for Home Service SEO?",
    answer:
      "Zonic Media specializes in helping home service businesses generate more booked jobs, calls, and local leads through proven SEO strategies built for real business growth.",
  },
];

export const metadata: Metadata = {
  title: "Local SEO for Home Services | More Calls & Jobs",
  description:
    "Local SEO for home service businesses that need more calls, local rankings, and booked jobs. Zonic Media helps plumbers, HVAC, roofers, and more grow.",
  keywords: [
    "local SEO for home services",
    "local SEO for contractors",
    "home services SEO company",
    "local SEO for plumbers",
    "local SEO for HVAC companies",
    "local SEO for roofers",
    "Google Maps ranking for home services",
    "Google Business Profile optimization for contractors",
    "local SEO agency for service businesses",
  ],
  alternates: { canonical: "/services/local-seo-for-home-services" },
  openGraph: {
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zonic Media — Marketing Agency for Small & Mid-Size Businesses",
      },
    ],
    title: "Local SEO for Home Services | More Calls & Jobs | Zonic Media",
    description:
      "Local SEO for home service businesses that need more calls, local rankings, and booked jobs. Zonic Media helps plumbers, HVAC, roofers, and more grow.",
    url: "/services/local-seo-for-home-services",
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  {
    name: "Local SEO for Home Services",
    url: "/services/local-seo-for-home-services",
  },
]);

const serviceJsonLd = buildServiceJsonLd({
  name: "Local SEO for Home Services",
  description:
    "Local SEO for home service businesses that need more calls, local rankings, and booked jobs — plumbers, HVAC, roofers, electricians, and more.",
  pageUrl: "/services/local-seo-for-home-services",
  serviceType: "Local SEO",
  areaServed: "United States",
});

function page() {
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
      <div id="local-seo-home-top"></div>
      <div className="local-seo-home-wrapper">
        {/*--local-seo-home-sec-1--*/}
        <div className="local-seo-home-sec-1">
          <div className="local-seo-home-content">
            <p className="local-seo-home-label">Grow your Business </p>
            <h1 className="local-seo-home-main-heading">
              Local SEO Built to Grow Home Service Businesses
            </h1>
            <p className="local-seo-home-descrp">
              Homeowners search online every day for reliable local
              professionals they can trust. If your business is not appearing in
              those searches, you are missing calls, estimates, and booked jobs
              that are going directly to competitors in your area.
            </p>

            <p className="local-seo-home-descrp">
              Zonic Media helps home service companies generate more leads
              through strategic local SEO. We improve your rankings on Google
              Search and Maps, increase visibility in your service areas, and
              turn high-intent searches into real customers for roofing, HVAC,
              plumbing, electrical, pest control, and other service businesses.
            </p>

            <div className="local-seo-sec-1-cta-clutch">
              <Link href={SITE_CONTACT.phoneHref} className="buttons">
                <IoCall />
                {SITE_CONTACT.phoneDisplay}
              </Link>

              <ClutchWidget />
            </div>

            {/* <div className="local-seo-home-sec-1-stats">
              <p>
                <span> 500+ </span>
                500+ Businesses Ranked <br /> on Google
              </p>

              <p>
                <span>4.9/5 </span>
                Client Satisfaction Rating
              </p>

              <p>
                <span> 30-60 Dayes </span>
                Average SEO Results Time
              </p>
            </div> */}
          </div>

          <div className="local-seo-home-contact-form">
            <ServiceLeadForm
              formType="local-seo-home-services"
              badge="Free Local SEO Audit"
              title="Get Your Free Local SEO Audit"
              subtitle="We'll respond within one business day."
              submitText="Get My Free Audit"
              defaultServices={["Local SEO"]}
              messageLabel="Tell us about your business"
              messagePlaceholder="What services do you offer and where?"
            />
          </div>
        </div>
        {/*--local-seo-home-sec-2--*/}
        <div className="local-seo-home-sec-2">
          <HomeSeoMarquee />
        </div>

        {/*--local-seo-home-sec-3--*/}
        <div className="local-seo-home-sec-3">
          <div className="local-seo-home-head-wrapper">
            <Col lg={6}>
              <div className="local-seo-home-heading-wrapper">
                <p className="local-seo-home-label">Why Local SEO Matters</p>
                <h2 className="local-seo-home-sec-head">
                  Why Local SEO is Essential for Home Service Businesses
                </h2>
              </div>
            </Col>

            <Col lg={5}>
              <div className="local-seo-home-head-descrp">
                <p className="local-seo-home-descrp">
                  Most customers choose from the top businesses they see on
                  Google Search and Google Maps. If your company is not visible
                  when people need help, you lose high-intent leads to
                  competitors. Strong{" "}
                  <Link
                    href="/services/gmb-optimization"
                    className="lsh-inline-link"
                  >
                    Google Business Profile optimization
                  </Link>{" "}
                  helps your business appear in front of nearby customers exactly
                  when they are ready to call and book.
                </p>
              </div>
            </Col>
          </div>

          <Row className="local-seo-home-cards-wrapper g-3">
            <Col lg={4}>
              <div className="local-seo-home-card-container">
                <IoCallSharp />

                <h3 className="local-seo-card-heading">
                  Increase Qualified Calls
                </h3>
                <p className="local-seo-card-descrp">
                  Reach homeowners actively searching for services in your area.
                  We help generate more inbound calls from customers ready to
                  hire now.
                </p>
              </div>
            </Col>

            <Col lg={4}>
              <div className="local-seo-home-card-container">
                <MdLocationOn />

                <h3 className="local-seo-card-heading">Rank Higher Locally</h3>
                <p className="local-seo-card-descrp">
                  Improve your visibility on Google Search and Maps for your top
                  services and target cities, helping you outrank nearby
                  competitors.
                </p>
              </div>
            </Col>

            <Col lg={4}>
              <div className="local-seo-home-card-container">
                <FaCalendarCheck />

                <h3 className="local-seo-card-heading">
                  Generate More Booked Jobs
                </h3>
                <p className="local-seo-card-descrp">
                  We turn online searches into estimates, appointments, and
                  paying customers through high-converting local SEO strategies.
                </p>
              </div>
            </Col>

            <Col lg={7}>
              <div className="local-seo-home-card-container local-seo-card-banner">
                <h2 className="local-seo-card-banner-heading">
                  Get Found First. Get More Calls. Get More Booked Jobs.
                </h2>

                <div className="local-seo-card-banner-ctas">
                  <HashScrollLink
                    href="#local-seo-home-top"
                    className="buttons"
                  >
                    <FaUser />
                    Get Your Free Local SEO Audit
                  </HashScrollLink>
                  <Link href="tel:+13027269736" className="buttons">
                    <IoCall />
                    Call: (302) 726-9736
                  </Link>
                </div>
              </div>
            </Col>

            <Col lg={5}>
              <div className="local-seo-home-card-container">
                <FaChartLine />

                <h3 className="local-seo-card-heading">
                  Build Long-Term Growth
                </h3>
                <p className="local-seo-card-descrp">
                  Create a consistent lead flow without depending only on
                  referrals or paid ads, helping your business grow month after
                  month.
                </p>
              </div>
            </Col>
          </Row>
        </div>

        {/*--local-seo-home-sec-4--*/}
        <div className="local-seo-home-sec-4">
          <WhyHomeSeo />
        </div>

        {/*--local-seo-home-sec-5--*/}
        <div className="local-seo-home-sec-5">
          <div className="local-seo-home-center-head">
            <p className="local-seo-home-label">
              Trusted by Growing Home Service Businesses Nationwide
            </p>
            <h2 className="local-seo-home-sec-head">
              Professional SEO Services for Home Service Companies & Franchises
            </h2>
          </div>

          <Row className="local-seo-home-cards-wrapper g-3">
            <Col lg={4}>
              <div className="local-seo-home-card-container">
                <FaSearchDollar />

                <h3 className="local-seo-card-heading">
                  Increase High-Intent Traffic
                </h3>
                <p className="local-seo-card-descrp">
                  We help your business attract customers actively searching for
                  local services. Our SEO strategies bring qualified traffic
                  that converts into calls, estimates, and booked jobs.
                </p>
              </div>
            </Col>

            <Col lg={4}>
              <div className="local-seo-home-card-container">
                <FaUserCheck />

                <h3 className="local-seo-card-heading">
                  Improve Website Conversions
                </h3>
                <p className="local-seo-card-descrp">
                  Getting traffic is only part of the process. We optimize your
                  website experience so more visitors trust your business and
                  take action quickly.
                </p>
              </div>
            </Col>

            <Col lg={4}>
              <div className="local-seo-home-card-container">
                <FaTrophy />

                <h3 className="local-seo-card-heading">
                  Dominate Local Search Results
                </h3>
                <p className="local-seo-card-descrp">
                  We improve your rankings on Google Search and Maps so your
                  company appears ahead of nearby competitors in your service
                  areas.
                </p>
              </div>
            </Col>

            <Col lg={4}>
              <div className="local-seo-home-card-container">
                <FaPenNib />

                <h3 className="local-seo-card-heading">
                  Content That Wins Customers
                </h3>
                <p className="local-seo-card-descrp">
                  We create service-focused content designed to rank well,
                  answer customer questions, and turn searches into leads for
                  your business.
                </p>
              </div>
            </Col>

            <Col lg={4}>
              <div className="local-seo-home-card-container local-seo-card-banner">
                <h2 className="local-seo-card-banner-heading">
                  Trusted by Home Service Businesses Ready to Grow
                </h2>

                <div className="local-seo-card-banner-ctas">
                  <Link href="tel:+13027269736" className="buttons">
                    <IoCall />
                    Call: (302) 726-9736
                  </Link>
                </div>
              </div>
            </Col>

            <Col lg={4}>
              <div className="local-seo-home-card-container">
                <FaRobot />

                <h3 className="local-seo-card-heading">
                  AI Search & GEO Optimization
                </h3>
                <p className="local-seo-card-descrp">
                  We optimize your website for modern search behavior, including
                  AI-driven platforms and generative search engines, helping
                  future-proof your visibility online.
                </p>
              </div>
            </Col>
          </Row>
        </div>

        {/*--local-seo-home-sec-6--*/}
        <div className="local-seo-home-sec-6">
          <div className="local-seo-home-head-wrapper">
            <Col lg={6}>
              <div className="local-seo-home-heading-wrapper">
                <p className="local-seo-home-label">
                  Industries We Help Grow with Local SEO
                </p>
                <h2 className="local-seo-home-sec-head">
                  Local SEO Strategies Built for Home Service Businesses
                </h2>
              </div>
            </Col>

            <Col lg={5}>
              <div className="local-seo-home-head-descrp">
                <p className="local-seo-home-descrp">
                  We work with a wide range of home service businesses that rely
                  on local visibility, phone calls, and booked jobs to grow
                  revenue — including roofers, remodelers, and repair pros.
                  Whether you serve residential, commercial, or multi-location
                  markets, our Local SEO strategies are built to generate
                  consistent leads and stronger rankings.
                </p>
              </div>
            </Col>
          </div>

          <Row className="local-seo-home-cards-industries-wrapper g-3">
            <Col lg={3}>
              <div className="local-seo-home-cards-indust-cont">
                <h3 className="local-seo-home-cards-indust-heading">
                  Home Improvement & Remodeling
                </h3>

                <ul>
                  <li>
                    <IoIosCheckmarkCircle />{" "}
                    <Link
                      href="/services/industry/local-seo-for-bathroom-remodelers"
                      className="lsh-inline-link"
                    >
                      Bathroom Remodelers
                    </Link>
                  </li>
                  <li>
                    <IoIosCheckmarkCircle />{" "}
                    <Link
                      href="/services/industry/local-seo-for-kitchen-remodelers"
                      className="lsh-inline-link"
                    >
                      Kitchen Remodelers
                    </Link>
                  </li>
                  <li>
                    <IoIosCheckmarkCircle />{" "}
                    <Link
                      href="/services/industry/local-seo-for-general-contractors"
                      className="lsh-inline-link"
                    >
                      General Contractors
                    </Link>
                  </li>
                  <li>
                    <IoIosCheckmarkCircle />{" "}
                    <Link
                      href="/services/industry/local-seo-for-flooring-companies"
                      className="lsh-inline-link"
                    >
                      Flooring Companies
                    </Link>
                  </li>
                  <li>
                    <IoIosCheckmarkCircle />{" "}
                    <Link
                      href="/services/industry/local-seo-for-window-and-door-companies"
                      className="lsh-inline-link"
                    >
                      Window & Door Companies
                    </Link>
                  </li>
                  <li>
                    <IoIosCheckmarkCircle />{" "}
                    <Link
                      href="/services/industry/local-seo-for-painting-contractors"
                      className="lsh-inline-link"
                    >
                      Painting Contractors
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>

            <Col lg={3}>
              <div className="local-seo-home-cards-indust-cont">
                <h3 className="local-seo-home-cards-indust-heading">
                  Repair & Installation Services
                </h3>

                <ul>
                  <li>
                    <IoIosCheckmarkCircle />{" "}
                    <Link
                      href="/services/industry/local-seo-for-electricians"
                      className="lsh-inline-link"
                    >
                      Electricians
                    </Link>
                  </li>
                  <li>
                    <IoIosCheckmarkCircle />{" "}
                    <Link
                      href="/services/industry/seo-services-for-plumber"
                      className="lsh-inline-link"
                    >
                      Plumbers
                    </Link>
                  </li>
                  <li>
                    <IoIosCheckmarkCircle />{" "}
                    <Link
                      href="/services/industry/local-seo-services-for-hvac"
                      className="lsh-inline-link"
                    >
                      HVAC Companies
                    </Link>
                  </li>
                  <li>
                    <IoIosCheckmarkCircle />{" "}
                    <Link
                      href="/services/industry/local-seo-for-garage-door-companies"
                      className="lsh-inline-link"
                    >
                      Garage Door Companies
                    </Link>
                  </li>
                  <li>
                    <IoIosCheckmarkCircle />{" "}
                    <Link
                      href="/services/industry/local-seo-for-roofing-companies"
                      className="lsh-inline-link"
                    >
                      Roofing Contractors
                    </Link>
                  </li>
                  <li>
                    <IoIosCheckmarkCircle />{" "}
                    <Link
                      href="/services/industry/local-seo-for-appliance-repair"
                      className="lsh-inline-link"
                    >
                      Appliance Repair Services
                    </Link>
                  </li>
                  <li>
                    <IoIosCheckmarkCircle />{" "}
                    <Link
                      href="/services/industry/seo-services-for-car-towing"
                      className="lsh-inline-link"
                    >
                      Car Towing Companies
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>

            <Col lg={3}>
              <div className="local-seo-home-cards-indust-cont">
                <h3 className="local-seo-home-cards-indust-heading">
                  Outdoor & Specialty Services
                </h3>

                <ul>
                  <li>
                    <IoIosCheckmarkCircle />{" "}
                    <Link
                      href="/services/industry/local-seo-for-landscaping-companies"
                      className="lsh-inline-link"
                    >
                      Landscaping Companies
                    </Link>
                  </li>
                  <li>
                    <IoIosCheckmarkCircle />{" "}
                    <Link
                      href="/services/industry/seo-services-for-pest-control"
                      className="lsh-inline-link"
                    >
                      Pest Control Services
                    </Link>
                  </li>
                  <li>
                    <IoIosCheckmarkCircle />{" "}
                    <Link
                      href="/services/industry/local-seo-for-pool-service-companies"
                      className="lsh-inline-link"
                    >
                      Pool Services
                    </Link>
                  </li>
                  <li>
                    <IoIosCheckmarkCircle />{" "}
                    <Link
                      href="/services/industry/local-seo-for-gutter-companies"
                      className="lsh-inline-link"
                    >
                      Gutter Companies
                    </Link>
                  </li>
                  <li>
                    <IoIosCheckmarkCircle />{" "}
                    <Link
                      href="/services/industry/local-seo-for-tree-service-companies"
                      className="lsh-inline-link"
                    >
                      Tree Services
                    </Link>
                  </li>
                  <li>
                    <IoIosCheckmarkCircle />{" "}
                    <Link
                      href="/services/industry/local-seo-for-solar-companies"
                      className="lsh-inline-link"
                    >
                      Solar Companies
                    </Link>
                  </li>
                  <li>
                    <IoIosCheckmarkCircle />{" "}
                    <Link
                      href="/services/industry/local-seo-for-commercial-cleaning"
                      className="lsh-inline-link"
                    >
                      Commercial Cleaning
                    </Link>
                  </li>
                  <li>
                    <IoIosCheckmarkCircle />{" "}
                    <Link
                      href="/services/industry/local-seo-services-for-residential-cleaning"
                      className="lsh-inline-link"
                    >
                      Residential Cleaning
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>

            <Col lg={3}>
              <div className="local-seo-home-cards-indust-cont">
                <h3 className="local-seo-home-cards-indust-heading">
                  Healthcare & Professional Services
                </h3>

                <ul>
                  <li>
                    <IoIosCheckmarkCircle />{" "}
                    <Link
                      href="/services/industry/chiropractor-local-seo-services"
                      className="lsh-inline-link"
                    >
                      Chiropractors
                    </Link>
                  </li>
                  <li>
                    <IoIosCheckmarkCircle />{" "}
                    <Link
                      href="/services/industry/dental-seo-services"
                      className="lsh-inline-link"
                    >
                      Dentists
                    </Link>
                  </li>
                  <li>
                    <IoIosCheckmarkCircle />{" "}
                    <Link
                      href="/services/industry/pediatricians"
                      className="lsh-inline-link"
                    >
                      Pediatricians
                    </Link>
                  </li>
                  <li>
                    <IoIosCheckmarkCircle />{" "}
                    <Link
                      href="/services/industry/local-seo-for-law-firms"
                      className="lsh-inline-link"
                    >
                      Law Firms
                    </Link>
                  </li>
                  <li>
                    <IoIosCheckmarkCircle />{" "}
                    <Link
                      href="/services/industry/real-estate-seo-services"
                      className="lsh-inline-link"
                    >
                      Real Estate Agents
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>

            {/*
            <Col lg={12}>
              <div className="local-seo-home-cards-indust-cont local-seo-home-cards-indus-banner">
                <h3 className="local-seo-card-banner-heading">
                  Don’t See Your Industry? We Can Still Help.
                </h3>

                <div className="local-seo-card-banner-ctas">
                  <HashScrollLink
                    href="#local-seo-home-top"
                    className="buttons"
                  >
                    Get Your Free Local SEO Audit
                  </HashScrollLink>
                </div>
              </div>
            </Col>
            */}
          </Row>
        </div>

        {/*--local-seo-home-sec-7--*/}
        {/*
        <div className="local-seo-home-sec-7">
          <div className="local-seo-home-center-head">
            <p className="local-seo-home-label">
              Flexible SEO Plans Designed for Real Growth
            </p>
            <h2 className="local-seo-home-sec-head">
              Transparent Pricing Built for Leads, Rankings & ROI
            </h2>
            <p className="local-seo-home-descrp">
              We offer scalable Local SEO packages based on your service area,
              competition level, and growth goals. Whether you need stronger
              rankings in one city or aggressive expansion across multiple
              markets, we have a plan built to deliver measurable results.
            </p>
          </div>

          <div className="local-seo-home-pricing-card-wrapper">
            <Row className="g-4 justify-content-center">
              <Col xs={12} md={12} lg={4}>
                <div className="local-seo-home-pricing-card">
                  <div className="local-seo-home-price-badge">STARTER PLAN</div>
                  <p className="local-seo-home-price">
                    $750 <span>/ month</span>
                  </p>
                  <p className="local-seo-home-price-subtitle">
                    Best for small businesses targeting one service area.
                  </p>
                  <h5 className="local-seo-home-price-section-title">
                    What’s Included
                  </h5>
                  <ul className="local-seo-home-price-features">
                    <li>Google Business Profile optimization</li>
                    <li>Local keyword targeting</li>
                    <li>Basic on-page SEO updates</li>
                    <li>Citation cleanup & consistency</li>
                    <li>Monthly reporting</li>
                    <li>Email support</li>
                  </ul>
                  <HashScrollLink
                    href="#local-seo-home-top"
                    className="local-seo-home-price-cta-btn"
                  >
                    Get This Plan
                  </HashScrollLink>
                </div>
              </Col>

              <Col xs={12} md={12} lg={4}>
                <div className="local-seo-home-pricing-card">
                  <div className="local-seo-home-price-badge">GROWTH PLAN</div>
                  <p className="local-seo-home-price">
                    $1350 <span>/ month</span>
                  </p>
                  <p className="local-seo-home-price-subtitle">
                    Best for growing companies ready for more calls and booked
                    jobs.
                  </p>
                  <h5 className="local-seo-home-price-section-title">
                    What’s Included
                  </h5>
                  <ul className="local-seo-home-price-features">
                    <li>Everything in Starter Plan</li>
                    <li>Multi-service keyword targeting</li>
                    <li>Advanced local SEO strategy</li>
                    <li>Review growth support</li>
                    <li>Competitor tracking</li>
                    <li>Priority support</li>
                  </ul>
                  <HashScrollLink
                    href="#local-seo-home-top"
                    className="local-seo-home-price-cta-btn"
                  >
                    Get This Plan
                  </HashScrollLink>
                </div>
              </Col>

              <Col xs={12} md={12} lg={4}>
                <div className="local-seo-home-pricing-card local-seo-home-pricing-card--dominate">
                  <div className="local-seo-home-price-badge">
                    DOMINATE PLAN
                  </div>
                  <p className="local-seo-home-price">
                    $2000 <span>/ month</span>
                  </p>
                  <p className="local-seo-home-price-subtitle">
                    Best for competitive markets and multi-location growth.
                  </p>
                  <h5 className="local-seo-home-price-section-title">
                    What’s Included
                  </h5>
                  <ul className="local-seo-home-price-features">
                    <li>Everything in Growth Plan</li>
                    <li>Multi-location SEO campaigns</li>
                    <li>High-authority backlink outreach</li>
                    <li>Conversion optimization</li>
                    <li>Aggressive ranking growth strategy</li>
                    <li>Dedicated account manager</li>
                  </ul>
                  <HashScrollLink
                    href="#local-seo-home-top"
                    className="local-seo-home-price-cta-btn"
                  >
                    Get This Plan
                  </HashScrollLink>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        */}

        <div className="local-seo-home-sec-7">
          <div className="local-seo-home-card-container local-seo-card-banner">
            <h2 className="local-seo-card-banner-heading">
              Ready to Get More Calls and Booked Jobs in Your Area?
            </h2>

            <div className="local-seo-card-banner-ctas">
              <HashScrollLink href="#local-seo-home-top" className="buttons">
                <FaUser />
                Get Your Free Local SEO Audit
              </HashScrollLink>
              <Link href="tel:+13027269736" className="buttons">
                <IoCall />
                Call: (302) 726-9736
              </Link>
            </div>
          </div>
        </div>

        {/*--local-seo-home-sec-8--*/}
        <div className="local-seo-home-sec-8">
          <div className="local-seo-home-head-wrapper">
            <Col lg={6}>
              <div className="local-seo-home-heading-wrapper">
                <p className="local-seo-home-label">
                  Trusted by Home Service Businesses Ready to Grow
                </p>
                <h2 className="local-seo-home-sec-head">
                  Why Choose Zonic Media over Other Home Service SEO Companies
                </h2>
              </div>
            </Col>

            <Col lg={5}>
              <div className="local-seo-home-head-descrp">
                <p className="local-seo-home-descrp">
                  Not all SEO agencies understand how home service businesses
                  generate revenue. Alongside broader campaigns like our{" "}
                  <Link
                    href="/services/hvac-marketing-agency"
                    className="lsh-inline-link"
                  >
                    HVAC marketing
                  </Link>{" "}
                  programs, we focus on one goal—helping you get more calls,
                  booked jobs, and long-term growth through proven Local SEO
                  strategies.
                </p>
              </div>
            </Col>
          </div>

          <Row className="local-seo-home-cards-wrapper g-3">
            <Col lg={4}>
              <div className="local-seo-home-card-container">
                <FaTools />

                <h3 className="local-seo-card-heading">
                  Industry-Specific Expertise
                </h3>
                <p className="local-seo-card-descrp">
                  We understand how homeowners search for roofing, HVAC,
                  plumbing, electrical, and other urgent services, allowing us
                  to target the right customers at the right time.
                </p>
              </div>
            </Col>

            <Col lg={4}>
              <div className="local-seo-home-card-container">
                <FaChartLine />

                <h3 className="local-seo-card-heading">Results That Matter</h3>
                <p className="local-seo-card-descrp">
                  We focus on rankings, calls, estimates, and booked jobs—not
                  vanity metrics that do not grow your business.
                </p>
              </div>
            </Col>

            <Col lg={4}>
              <div className="local-seo-home-card-container">
                <FaClipboardList />

                <h3 className="local-seo-card-heading">
                  Transparent Strategy & Reporting
                </h3>
                <p className="local-seo-card-descrp">
                  You receive clear updates, measurable progress, and full
                  visibility into how your campaign is performing every month.
                </p>
              </div>
            </Col>

            <Col lg={7}>
              <div className="local-seo-home-card-container local-seo-card-banner">
                <SharedLottiePlayer
                  className="local-seo-home-sec-8-banner-lottie"
                  src="/lottie/local-seo-2.lottie"
                />
              </div>
            </Col>

            <Col lg={5}>
              <div className="local-seo-home-card-container">
                <FaLayerGroup />

                <h3 className="local-seo-card-heading">
                  Long-Term Growth System
                </h3>
                <p className="local-seo-card-descrp">
                  Our strategies build lasting local visibility so your business
                  keeps generating leads without relying only on referrals or
                  paid ads.
                </p>
              </div>
            </Col>
          </Row>
        </div>

        {/*--local-seo-home-sec-9--*/}
        <div className="local-seo-home-sec-9">
          <h2 className="testimonial-heading">
            Hear What Our Clients Say About
            <span> Working with Zonic Media.</span>
          </h2>
          <div className="local-seo-home-testimonial-widget">
            <ClutchWidget
              widgetType="12"
              height="375"
              primaryColor="#f7c00a"
              reviews="448872,448007,448005,448004,447635,447416,447409,446728,446721,446262,445981,446714,446714,446714"
            />
          </div>
        </div>

        {/*--local-seo-home-sec-10--*/}
        <div className="local-seo-home-sec-10">
          <div className="local-seo-home-head-wrapper">
            <Col lg={6}>
              <div className="local-seo-home-heading-wrapper">
                <p className="local-seo-home-label">Local SEO FAQs</p>

                <h2 className="local-seo-home-sec-head">
                  Local SEO Questions Answered for Home Service Businesses
                </h2>

                <p className="local-seo-home-descrp">
                  Have questions about how local SEO works or how it can grow
                  your home service business? Here are clear answers to the most
                  common questions about rankings, leads, timelines, and results
                  — and if your listing is offline, our{" "}
                  <Link
                    href="/services/gmb-reinstatement-help"
                    className="lsh-inline-link"
                  >
                    suspended Google Business Profile reinstatement
                  </Link>{" "}
                  team can help you recover it.
                </p>
              </div>
            </Col>
          </div>

          <div className="local-seo-home-faq-wrapper">
            <GmbFaqs items={SeoHomeFaqs} />
          </div>

          <Script
            id="local-seo-home-faq-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                url: "https://zonicllc.com/services/local-seo-for-home-services",
                mainEntity: SeoHomeFaqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer,
                  },
                })),
              }),
            }}
          />
        </div>

        {/*--local-seo-home-sec-11--*/}
        <div className="local-seo-home-sec-11-wrapper">
          <div className="local-seo-home-sec-1 local-seo-home-sec-11">
            <div className="local-seo-home-content">
              <p className="local-seo-home-label">95% Growth Success Rate</p>
              <h2 className="local-seo-home-main-heading">
                Local SEO Built to Grow Home Service Businesses
              </h2>
              <p className="local-seo-home-descrp">
                Homeowners search online every day for reliable local
                professionals they can trust — from plumbers exploring our{" "}
                <Link
                  href="/services/plumbing-marketing-agency"
                  className="lsh-inline-link"
                >
                  plumbing marketing
                </Link>{" "}
                to remodelers and landscapers. If your business is not appearing
                in those searches, you are missing calls, estimates, and booked
                jobs that are going directly to competitors in your area.
              </p>
              <div className="local-seo-home-trust-badges">
                <p>
                  <Image
                    src="/images/gmb-reinst/trust-img-1.svg"
                    width={20}
                    height={20}
                    alt="google logo"
                  />{" "}
                  Google Business Profile Experts
                </p>

                <p>
                  <Image
                    src="/images/gmb-reinst/trust-img-3.svg"
                    width={20}
                    height={20}
                    alt="rating star"
                  />{" "}
                  4.9/5 Client Satisfaction Rating
                </p>

                <p>
                  <Image
                    src="/images/gmb-reinst/trust-img-4.svg"
                    width={20}
                    height={20}
                    alt="verified badge"
                  />{" "}
                  Proven Local SEO Strategies
                </p>

                <p>
                  <Image
                    src="/images/gmb-reinst/trust-img-2.svg"
                    width={20}
                    height={20}
                    alt="shield logo"
                  />{" "}
                  500+ Businesses Ranked on Google
                </p>
              </div>

              <Image
                src="/images/contact-section.jpg"
                width={2000}
                height={938}
                alt="Digital contact and email communication illustration"
                className="local-seo-home-contact-illustration"
              />
            </div>

            <div className="local-seo-home-contact-form">
              <ServiceLeadForm
                formType="local-seo-home-services"
                badge="Free Local SEO Audit"
                title="Get Your Free Local SEO Audit"
                subtitle="We'll respond within one business day."
                submitText="Get My Free Audit"
                defaultServices={["Local SEO"]}
                messageLabel="Tell us about your business"
                messagePlaceholder="What services do you offer and where?"
              />
            </div>
          </div>
        </div>

        {/*--local-seo-home-sec-12--*/}
        <div className="local-seo-home-sec-12">
          <h2 className="local-seo-home-sec-12-heading">
            Be the First Choice When Customers Search in Your Area
          </h2>

          <p className="local-seo-home-sec-12-descrp">
            We rank your business at the top of Google—so you get more calls,
            more jobs, and steady growth without ads, whether you run a
            remodeling crew or a dedicated pest control route, consistently
            attracting homeowners ready to hire.
          </p>

          <div className="local-seo-home-sec-12-ctas">
            <Link href="tel:+13027269736" className="buttons">
              Speak With an SEO Specialist
              <span className="buttons__icon-wrapper">
                <svg
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="buttons__icon-svg"
                  width="8"
                >
                  <path
                    d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                    fill="currentColor"
                  />
                </svg>
                <svg
                  viewBox="0 0 14 15"
                  fill="none"
                  width="8"
                  xmlns="http://www.w3.org/2000/svg"
                  className="buttons__icon-svg buttons__icon-svg--copy"
                >
                  <path
                    d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </Link>

            <Link href="tel:+13027269736" className="buttons">
              Call Now: (302) 726-9736
              <span className="buttons__icon-wrapper">
                <svg
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="buttons__icon-svg"
                  width="8"
                >
                  <path
                    d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                    fill="currentColor"
                  />
                </svg>
                <svg
                  viewBox="0 0 14 15"
                  fill="none"
                  width="8"
                  xmlns="http://www.w3.org/2000/svg"
                  className="buttons__icon-svg buttons__icon-svg--copy"
                >
                  <path
                    d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default page;
