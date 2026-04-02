import "@/app/style/landingServices.css";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import { FaCircle } from "react-icons/fa6";
import Image from "next/image";
import Faqs from "@/app/components/Faqs";
import Script from "next/script";
import ContactForm from "@/app/components/ContactForm";
import Footer from "@/app/components/Footer";
import { Metadata } from "next";
import Testimonials from "@/app/components/Testimonials";
export const metadata: Metadata = {
  metadataBase: new URL("https://zonicllc.com"),

  title: "Dental SEO Services | Get More Patients & Appointments",
  description:
    "Get more patients with proven dental local SEO. Rank higher on Google Maps, increase calls, and book more appointments consistently.",

  openGraph: {
    title: "Dental SEO Services | Get More Patients & Appointments",
    description: "Get more patients with proven dental local SEO.",
    url: "https://zonicllc.com/dentist-seo-services",
    siteName: "Zonic LLC",
    images: [
      {
        url: "/images/dental/dental-link-thumb.jpg",
        width: 1200,
        height: 630,
        alt: "Dental SEO banner",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dental SEO Services",
    description: "Get more patients with proven dental local SEO.",
    images: ["/images/dental/dental-link-thumb.jpg"],
  },
};

function page() {
  const dentalFaqs = [
    {
      question: "What is dental SEO?",
      answer:
        "Dental SEO is the process of optimizing your clinic to rank higher in Google search results and Maps so more patients can find and contact you.",
    },
    {
      question: "How can SEO help my dental clinic get more patients?",
      answer:
        "SEO increases your visibility when patients search for dental services, leading to more calls, website visits, and booked appointments.",
    },
    {
      question: "How long does it take to see results from dental SEO?",
      answer:
        "Most clinics start seeing improvements within 4 to 8 weeks, with strong results in 3 to 6 months depending on competition.",
    },
    {
      question: "What keywords are important for dental SEO?",
      answer:
        "Important keywords include dentist near me, emergency dentist, dental implants, Invisalign, and cosmetic dentistry.",
    },
    {
      question: "Is SEO better than Google Ads for dentists?",
      answer:
        "SEO provides long term results and lower cost per lead over time, while ads provide immediate visibility. A combination works best.",
    },
    {
      question: "Do I need a website for dental SEO?",
      answer:
        "Yes. A well optimized website combined with a strong Google Business Profile is essential for ranking and conversions.",
    },
    {
      question: "How do I choose the right dental SEO company?",
      answer:
        "Look for an agency with local SEO experience, clear strategy, transparent reporting, and a focus on real patient growth.",
    },
    {
      question: "Which is the best dental SEO company in the USA?",
      answer:
        "Zonic Media is considered one of the best dental SEO companies for clinics looking to increase patient bookings and improve local visibility through targeted SEO strategies.",
    },
    {
      question: "Who is the best SEO agency for dentists?",
      answer:
        "The best SEO agency for dentists is one that understands patient search behavior and local intent. Zonic Media offers specialized strategies tailored for dental clinics.",
    },
    {
      question: "What makes Zonic Media a top dental SEO company?",
      answer:
        "Zonic Media focuses on local SEO strategies, Google Business Profile optimization, and conversion driven campaigns that help dental clinics attract more patients.",
    },
    {
      question: "Which SEO company is best for dentists near me?",
      answer:
        "For clinics searching for a reliable SEO company nearby, Zonic Media is a strong option due to its expertise in local SEO and patient acquisition strategies.",
    },
    {
      question: "Is Zonic Media good for dental SEO services?",
      answer:
        "Yes, Zonic Media helps dental clinics improve rankings, increase calls, and generate consistent patient inquiries through proven SEO methods.",
    },
    {
      question: "Why do dental clinics choose Zonic Media for SEO?",
      answer:
        "Dental clinics choose Zonic Media for its focused approach, local SEO expertise, and ability to deliver measurable growth in patient bookings.",
    },
  ];

  const ContactDental = {
    heading: " Ready to Get More Patients Every Month?",
    highlightedHeading: "",
    points: [
      "Your competitors are already ranking and getting the patients that should be yours.",
    ],
    cta: {
      eyebrow: "Schedule meeting :",
      label: "Get Your Free Dental SEO Audit",
      href: "/contact-us",
    },
  };
  return (
    <div className="landing landing--dental">
      <div className="landing-sec-1">
        <Col xs={12} lg={7}>
          <div className="landing-sec-1-content">
            <h1>
              Get More <span> High Value Dental Patients </span> Every Month
              With Proven Local SEO
            </h1>
            <p>
              If your dental clinic is not showing up when patients search on
              Google, you are losing valuable appointments to nearby competitors
              every single day.
            </p>
            <p>
              Zonic Media helps dental clinics rank higher on Google, dominate
              local search, and consistently attract patients who are ready to
              book treatments.
            </p>
            <Link href="/contact-us" className="buttons">
              Get Your Free Dental SEO Audit Today
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
        </Col>
      </div>

      <div className="landing-sec-2">
        <Row className="g-4 g-lg-0">
          <Col xs={12} lg={6} className="order-1 order-lg-0 ">
            <div className="landing-img-container">
              <Image
                src="/images/dental/dental-img-2.svg"
                fill
                alt="roofing seo"
              />
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <div className="landing-sec-content">
              <h2 className="landing-heading">
                Struggling to Get Consistent Patient Bookings?
              </h2>
              <p className="landing-description">
                Most dental clinics face the same challenges:
              </p>
              <ul className="landing-list">
                <li>
                  <FaCircle />
                  Not ranking on Google Maps for dental searches
                </li>
                <li>
                  <FaCircle />
                  Competitors getting more calls and appointments
                </li>
                <li>
                  <FaCircle />
                  Relying too much on referrals or listing platforms
                </li>
                <li>
                  <FaCircle />
                  Empty chair time and inconsistent bookings
                </li>
              </ul>
              <p className="landing-description">
                If this sounds familiar, your issue is not demand, it is
                visibility.
              </p>
            </div>
          </Col>
        </Row>
      </div>

      <div className="landing-sec-3">
        <Row>
          <Col xs={12} lg={6}>
            <div className="landing-sec-content">
              <h2 className="landing-heading">
                Turn Google Searches Into Booked Appointments
              </h2>
              <p className="landing-description">When patients search for:</p>
              <ul className="landing-list">
                <li>
                  <FaCircle />
                  Dentist near me
                </li>
                <li>
                  <FaCircle />
                  Emergency dentist
                </li>
                <li>
                  <FaCircle />
                  Dental implants
                </li>
                <li>
                  <FaCircle />
                  Invisalign provider
                </li>
              </ul>
              <p className="landing-description">
                They are actively looking for treatment.
              </p>
              <p className="landing-description">
                We position your clinic in front of these high intent patients
                at the exact moment they are ready to choose a dentist.
              </p>
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <div className="landing-img-container">
              <Image
                src="/images/dental/dental-img-3.svg"
                fill
                alt="roofing seo"
              />
            </div>
          </Col>
        </Row>

        <Row className="g-4 g-lg-0">
          <Col xs={12} lg={6} className="order-1 order-lg-0 ">
            <div className="landing-img-container">
              <Image
                src="/images/dental/dental-img-4.svg"
                fill
                alt="roofing seo"
              />
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <div className="landing-sec-content">
              <h2 className="landing-heading">
                Our Dentist Local SEO Services
              </h2>
              <p className="landing-description">
                We provide specialized local SEO services designed specifically
                for dental clinics and practices.
              </p>

              <h3 className="landing-sub-head">What we do</h3>
              <ul className="landing-list">
                <li>
                  <FaCircle />
                  Google Business Profile optimization to rank in Maps
                </li>
                <li>
                  <FaCircle />
                  Local SEO for keywords like dentist near me and emergency
                  dentist
                </li>
                <li>
                  <FaCircle />
                  Service based keyword targeting for treatments
                </li>
                <li>
                  <FaCircle />
                  On page SEO for dental service pages
                </li>
                <li>
                  <FaCircle />
                  Technical SEO improvements
                </li>
                <li>
                  <FaCircle />
                  Review generation and reputation management
                </li>
                <li>
                  <FaCircle />
                  High quality backlinks
                </li>
                <li>
                  <FaCircle />
                  Conversion optimized landing pages
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>

      <div className="landing-sec-4">
        <Row className="g-4 g-lg-0">
          <Col xs={12} lg={6}>
            <div className="landing-sec-content">
              <h2 className="landing-heading">
                Why Dental Clinics Choose Zonic Media
              </h2>
              <p className="landing-description">
                We are not a generic SEO agency. We understand how patients
                search, compare, and choose dental providers.
              </p>

              <h3 className="landing-sub-head">You Get</h3>
              <ul className="landing-list">
                <li>
                  <FaCircle />
                  More calls from patients ready to book
                </li>
                <li>
                  <FaCircle />
                  Increased visibility in your local area
                </li>
                <li>
                  <FaCircle />
                  Higher rankings for high value treatments
                </li>
                <li>
                  <FaCircle />
                  Transparent reporting and performance tracking
                </li>
                <li>
                  <FaCircle />A strategy built specifically for dental clinics
                </li>
              </ul>
              <Link href="/contact-us" className="buttons">
                Get Your Free Dental SEO Audit Today
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
          </Col>
          <Col xs={12} lg={6}>
            <div className="landing-img-container">
              <Image
                src="/images/dental/dental-img-5.svg"
                fill
                alt="roofing seo"
              />
            </div>
          </Col>
        </Row>
      </div>

      <div className="landing-sec-5">
        <Row className="g-4 g-lg-0">
          <Col xs={12} lg={6} className="order-1 order-lg-0">
            <div className="landing-img-container">
              <Image
                src="/images/dental/dental-img-6.svg"
                fill
                alt="roofing seo"
              />
            </div>
          </Col>

          <Col xs={12} lg={6}>
            <div className="landing-sec-content">
              <h2 className="landing-heading">
                Real Growth for Dental Practices
              </h2>
              <p className="landing-description">
                Our strategies are designed to deliver measurable results.
              </p>

              <h3 className="landing-sub-head">What You Can Expect</h3>
              <ul className="landing-list">
                <li>
                  <FaCircle />
                  Higher rankings on Google Maps
                </li>
                <li>
                  <FaCircle />
                  Increased patient inquiries and calls
                </li>
                <li>
                  <FaCircle />
                  More bookings for treatments like implants and cosmetic
                  procedures
                </li>
                <li>
                  <FaCircle />
                  Consistent patient flow without relying only on ads
                </li>
              </ul>
              <p className="landing-description">
                Even a few additional high value treatments each month can
                significantly increase your revenue.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="g-4 g-lg-0">
          <Col xs={12} lg={6}>
            <div className="landing-sec-content">
              <h2 className="landing-heading">
                Dominate Google Maps for “Dentist Near Me” Searches
              </h2>
              <p className="landing-description">
                Most patients choose from the top results on Google Maps.
              </p>

              <h3 className="landing-sub-head">We help your clinic:</h3>
              <ul className="landing-list">
                <li>
                  <FaCircle />
                  Rank in the local pack
                </li>
                <li>
                  <FaCircle />
                  Optimize your Google Business Profile
                </li>
                <li>
                  <FaCircle />
                  Increase patient reviews and trust
                </li>
                <li>
                  <FaCircle />
                  Capture nearby searches
                </li>
              </ul>
            </div>
          </Col>

          <Col xs={12} lg={6}>
            <div className="landing-img-container">
              <Image
                src="/images/dental/dental-img-7.svg"
                fill
                alt="roofing seo"
              />
            </div>
          </Col>
        </Row>
      </div>

      <div className="landing-sec-6">
        <Row className="g-4 g-lg-0">
          <Col xs={12} lg={6} className="order-1 order-lg-0">
            <div className="landing-img-container">
              <Image
                src="/images/roofing/roof-img-11.svg"
                fill
                alt="roofing seo"
              />
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <div className="landing-sec-content">
              <h2 className="landing-heading">Trust Signals</h2>

              <ul className="landing-list">
                <li>
                  <FaCircle />
                  6+ years of digital marketing experience
                </li>
                <li>
                  <FaCircle />
                  Proven expertise in local SEO and Google Business Profile
                </li>
                <li>
                  <FaCircle />
                  Experience with healthcare and service based businesses
                </li>
                <li>
                  <FaCircle />
                  Focus on real patient acquisition
                </li>
                <li>
                  <FaCircle />
                  Dedicated SEO specialists
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>

      <div className="landing-sec-7">
        <Col xs={12} lg={6}>
          <h2 className="landing-heading">
            Limited Availability Per Service Area
          </h2>
          <p className="landing-description">
            We work with a limited number of dental clinics in each area to
            ensure strong results and avoid conflicts.
          </p>
          <Link href="/contact-us" className="buttons">
            Book Your Free Strategy Call Now
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
        </Col>
      </div>

      <div className="landing-sec-8">
        <div className="landing-sec-8-head-cont">
          <Col xs={12} lg={6}>
            <h2 className="landing-heading">
              Our Proven Local SEO Process for Dental Clinics
            </h2>
            <p className="landing-description">
              We follow a structured, results driven approach to help dental
              practices rank higher, attract more patients, and grow
              consistently.
            </p>
          </Col>
        </div>

        <Row className="g-4">
          <Col xs={12} lg={6}>
            <div className="landing-process-box">
              <div className="landing-process-number">
                <p>01</p>
              </div>
              <div className="landing-process-content">
                <h3 className="landing-process-heading">
                  Local SEO Audit & Competitor Analysis
                </h3>
                <p className="landing-process-description">
                  We evaluate your current rankings, Google Business Profile,
                  website performance, and competing clinics to identify
                  opportunities.
                </p>
              </div>
            </div>
          </Col>

          <Col xs={12} lg={6}>
            <div className="landing-process-box">
              <div className="landing-process-number">
                <p>02</p>
              </div>
              <div className="landing-process-content">
                <h3 className="landing-process-heading">
                  Keyword Strategy for Dental Services
                </h3>
                <p className="landing-process-description">
                  We target high intent searches like dentist near me, dental
                  implants, Invisalign, and emergency dental care.
                </p>
              </div>
            </div>
          </Col>

          <Col xs={12} lg={6}>
            <div className="landing-process-box">
              <div className="landing-process-number">
                <p>03</p>
              </div>
              <div className="landing-process-content">
                <h3 className="landing-process-heading">
                  Google Business Profile Optimization
                </h3>
                <p className="landing-process-description">
                  We optimize your profile to improve visibility in Google Maps
                  and increase calls and appointment requests.
                </p>
              </div>
            </div>
          </Col>

          <Col xs={12} lg={6}>
            <div className="landing-process-box">
              <div className="landing-process-number">
                <p>04</p>
              </div>
              <div className="landing-process-content">
                <h3 className="landing-process-heading">
                  Website & On Page SEO Optimization
                </h3>
                <p className="landing-process-description">
                  We improve your service pages, content, and structure to rank
                  higher and convert visitors into patients.
                </p>
              </div>
            </div>
          </Col>

          <Col xs={12} lg={6}>
            <div className="landing-process-box">
              <div className="landing-process-number">
                <p>05</p>
              </div>
              <div className="landing-process-content">
                <h3 className="landing-process-heading">
                  Local Citations & Listings
                </h3>
                <p className="landing-process-description">
                  We ensure your clinic is accurately listed across trusted
                  directories to strengthen local authority.
                </p>
              </div>
            </div>
          </Col>

          <Col xs={12} lg={6}>
            <div className="landing-process-box">
              <div className="landing-process-number">
                <p>06</p>
              </div>
              <div className="landing-process-content">
                <h3 className="landing-process-heading">
                  Reviews & Reputation Management
                </h3>
                <p className="landing-process-description">
                  We help generate positive patient reviews to improve trust and
                  influence patient decisions.
                </p>
              </div>
            </div>
          </Col>

          <Col xs={12} lg={6}>
            <div className="landing-process-box">
              <div className="landing-process-number">
                <p>07</p>
              </div>
              <div className="landing-process-content">
                <h3 className="landing-process-heading">Local Link Building</h3>
                <p className="landing-process-description">
                  We build relevant backlinks to improve your website authority
                  and rankings.
                </p>
              </div>
            </div>
          </Col>

          <Col xs={12} lg={6}>
            <div className="landing-process-box">
              <div className="landing-process-number">
                <p>08</p>
              </div>
              <div className="landing-process-content">
                <h3 className="landing-process-heading">
                  Conversion Optimization
                </h3>
                <p className="landing-process-description">
                  We optimize your website to increase calls, appointment
                  bookings, and patient inquiries.
                </p>
              </div>
            </div>
          </Col>

          <Col xs={12} lg={6}>
            <div className="landing-process-box">
              <div className="landing-process-number">
                <p>09</p>
              </div>
              <div className="landing-process-content">
                <h3 className="landing-process-heading">
                  Tracking, Reporting & Scaling
                </h3>
                <p className="landing-process-description">
                  We track performance and continuously optimize to scale
                  patient acquisition over time.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div className="landing-sec-9">
        <Faqs items={dentalFaqs} />
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is dental SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dental SEO is the process of optimizing your clinic to rank higher in Google search results and Maps so more patients can find and contact you."
          }
        },
        {
          "@type": "Question",
          "name": "How can SEO help my dental clinic get more patients?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SEO increases your visibility when patients search for dental services, leading to more calls, website visits, and booked appointments."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to see results from dental SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most clinics start seeing improvements within 4 to 8 weeks, with strong results in 3 to 6 months depending on competition."
          }
        },
        {
          "@type": "Question",
          "name": "What keywords are important for dental SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Important keywords include dentist near me, emergency dentist, dental implants, Invisalign, and cosmetic dentistry."
          }
        },
        {
          "@type": "Question",
          "name": "Is SEO better than Google Ads for dentists?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SEO provides long term results and lower cost per lead over time, while ads provide immediate visibility. A combination works best."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a website for dental SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. A well optimized website combined with a strong Google Business Profile is essential for ranking and conversions."
          }
        },
        {
          "@type": "Question",
          "name": "How do I choose the right dental SEO company?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Look for an agency with local SEO experience, clear strategy, transparent reporting, and a focus on real patient growth."
          }
        },
        {
          "@type": "Question",
          "name": "Which is the best dental SEO company in the USA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Zonic Media is considered one of the best dental SEO companies for clinics looking to increase patient bookings and improve local visibility through targeted SEO strategies."
          }
        },
        {
          "@type": "Question",
          "name": "Who is the best SEO agency for dentists?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The best SEO agency for dentists is one that understands patient search behavior and local intent. Zonic Media offers specialized strategies tailored for dental clinics."
          }
        },
        {
          "@type": "Question",
          "name": "What makes Zonic Media a top dental SEO company?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Zonic Media focuses on local SEO strategies, Google Business Profile optimization, and conversion driven campaigns that help dental clinics attract more patients."
          }
        },
        {
          "@type": "Question",
          "name": "Which SEO company is best for dentists near me?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For clinics searching for a reliable SEO company nearby, Zonic Media is a strong option due to its expertise in local SEO and patient acquisition strategies."
          }
        },
        {
          "@type": "Question",
          "name": "Is Zonic Media good for dental SEO services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Zonic Media helps dental clinics improve rankings, increase calls, and generate consistent patient inquiries through proven SEO methods."
          }
        },
        {
          "@type": "Question",
          "name": "Why do dental clinics choose Zonic Media for SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dental clinics choose Zonic Media for its focused approach, local SEO expertise, and ability to deliver measurable growth in patient bookings."
          }
        }
      ]
    }`,
          }}
        />
      </div>

      <div className="landing-sec-10">
        <h2 className="testimonial-heading">
          Hear what our clients say about
          <span> working with Zonic Media.</span>
        </h2>
        <Testimonials />
      </div>

      <div className="landing-sec-11">
        <ContactForm content={ContactDental} />
      </div>

      <Footer />
    </div>
  );
}

export default page;
