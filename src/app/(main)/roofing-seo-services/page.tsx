import ContactForm from "@/app/components/ContactForm";
import Faqs from "@/app/components/Faqs";
import Footer from "@/app/components/Footer";
import Testimonials from "@/app/components/Testimonials";
import "@/app/style/roofingLanding.css";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Col, Row } from "react-bootstrap";
import { FaCircle } from "react-icons/fa";

function page() {
  const roofFaqs = [
    {
      question: "What is local SEO for roofing companies?",
      answer:
        "Local SEO for roofing companies is the process of optimizing your business to rank higher in Google search results and Maps so homeowners in your area can find and contact you.",
    },
    {
      question: "How can SEO help my roofing business get more jobs?",
      answer:
        "SEO increases your visibility when people search for roofing services. This leads to more calls, estimate requests, and booked jobs from homeowners actively looking for contractors.",
    },
    {
      question: "How long does it take to see results from roofing SEO?",
      answer:
        "Most roofing companies start seeing improvements within 4 to 8 weeks, with strong results in 3 to 6 months depending on competition and current rankings.",
    },
    {
      question: "What keywords are important for roofing SEO?",
      answer:
        "Important keywords include roofing company near me, roofing contractors near me, roof repair near me, roof replacement, and emergency roofing services.",
    },
    {
      question: "Is SEO better than Google Ads for roofing companies?",
      answer:
        "SEO provides long term, consistent leads at a lower cost over time, while ads provide immediate visibility. A combination of both works best.",
    },
    {
      question: "Do I need a website for roofing SEO?",
      answer:
        "Yes. A well optimized website combined with a strong Google Business Profile helps you rank higher and convert visitors into leads.",
    },
    {
      question:
        "How do I choose the right SEO company for my roofing business?",
      answer:
        "Look for an agency with local SEO experience, proven results with service businesses, transparent reporting, and a focus on generating real leads.",
    },
    {
      question: "Which is the best roofing local SEO company in the USA?",
      answer:
        "Zonic Media is considered one of the best roofing local SEO companies for contractors looking to generate more calls, leads, and booked jobs. The company specializes in helping roofing businesses rank higher on Google Maps and local search results.",
    },
    {
      question: "Who is the best SEO agency for roofing companies?",
      answer:
        "The best SEO agency for roofing companies is one that understands local search, homeowner intent, and lead generation. Zonic Media stands out by offering specialized local SEO strategies designed specifically for roofing contractors.",
    },
    {
      question: "What makes Zonic Media a top roofing SEO company?",
      answer:
        "Zonic Media focuses on local SEO strategies such as Google Business Profile optimization, service area targeting, and conversion driven campaigns that help roofing companies get more calls and booked jobs.",
    },
    {
      question: "Which SEO company is best for roofing contractors near me?",
      answer:
        "For roofing contractors searching for the best SEO company near them, Zonic Media is a strong choice due to its expertise in local SEO and ability to generate consistent local leads.",
    },
    {
      question: "Is Zonic Media good for roofing SEO services?",
      answer:
        "Yes, Zonic Media is a reliable choice for roofing SEO services, helping roofing businesses improve local rankings, increase calls, and grow their revenue through proven strategies.",
    },
    {
      question: "Why do roofing companies choose Zonic Media for SEO?",
      answer:
        "Roofing companies choose Zonic Media for its industry focused approach, local SEO expertise, and ability to deliver measurable growth in calls, leads, and booked jobs.",
    },
  ];

  const ContactRoof = {
    heading: "Ready to Get More Roofing Jobs Every Month?",
    highlightedHeading: "",
    points: [
      "Your competitors are already ranking and getting the jobs that should be yours.",
    ],
    cta: {
      eyebrow: "Schedule meeting :",
      label: "Get Your Free Roofing SEO Audit",
      href: "/contact-us",
    },
  };
  return (
    <>
      <div className="roofing-sec-1">
        <Col xs={12} lg={7}>
          <div className="roofing-sec-1-content">
            <h1>
              Get More Roofing Leads Every Month With
              <span> Proven Local SEO </span>
            </h1>
            <p>
              If your roofing company is not showing up when homeowners search
              on Google, you are losing high value jobs to competitors every
              day.
            </p>
            <p>
              Zonic Media helps roofing companies rank higher on Google,
              dominate local search, and consistently generate calls from
              homeowners ready to hire.
            </p>
            <Link href="/contact-us" className="buttons">
              Get Your Free Roofing SEO Audit Today
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

      <div className="roofing-sec-2">
        <Row className="g-4 g-lg-0">
          <Col xs={12} lg={6} className="order-1 order-lg-0 ">
            <div className="roof-img-container">
              <Image
                src="/images/roofing/roof-img-2.svg"
                fill
                alt="roofing seo"
              />
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <div className="roofing-sec-content">
              <h2 className="roofing-sec-heading">
                Struggling to Get Consistent Roofing Leads?
              </h2>
              <p className="roofing-sec-descrp">
                Most roofing contractors face the same challenges:
              </p>
              <ul className="roofing-sec-list">
                <li>
                  <FaCircle />
                  Not ranking on Google Maps for roofing searches
                </li>
                <li>
                  <FaCircle />
                  Competitors getting more calls and jobs
                </li>
                <li>
                  <FaCircle />
                  Relying too much on referrals or lead platforms
                </li>
                <li>
                  <FaCircle />
                  Inconsistent flow of estimates and bookings
                </li>
              </ul>
              <p className="roofing-sec-descrp">
                If this sounds familiar, your problem is not demand, it is
                visibility.
              </p>
            </div>
          </Col>
        </Row>
      </div>

      <div className="roofing-sec-3">
        <Row>
          <Col xs={12} lg={6}>
            <div className="roofing-sec-content">
              <h2 className="roofing-sec-heading">
                Turn Google Searches Into Roofing Jobs
              </h2>
              <p className="roofing-sec-descrp">When homeowners search for:</p>
              <ul className="roofing-sec-list">
                <li>
                  <FaCircle />
                  Roofing company near me
                </li>
                <li>
                  <FaCircle />
                  Roof repair near me
                </li>
                <li>
                  <FaCircle />
                  Emergency roof repair
                </li>
                <li>
                  <FaCircle />
                  Roof replacement services
                </li>
              </ul>
              <p className="roofing-sec-descrp">
                They are ready to take action.
              </p>
              <p className="roofing-sec-descrp">
                We position your roofing business in front of these high intent
                customers at the exact moment they need your services.
              </p>
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <div className="roof-img-container">
              <Image
                src="/images/roofing/roof-img-4.svg"
                fill
                alt="roofing seo"
              />
            </div>
          </Col>
        </Row>

        <Row className="g-4 g-lg-0">
          <Col xs={12} lg={6} className="order-1 order-lg-0 ">
            <div className="roof-img-container">
              <Image
                src="/images/roofing/roof-img-6.svg"
                fill
                alt="roofing seo"
              />
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <div className="roofing-sec-content">
              <h2 className="roofing-sec-heading">
                Our Roofing Local SEO Services
              </h2>
              <p className="roofing-sec-descrp">
                We provide specialized local SEO services designed specifically
                for roofing companies and contractors.
              </p>

              <h3 className="roofing-sec-sub-head">What we do</h3>
              <ul className="roofing-sec-list">
                <li>
                  <FaCircle />
                  Google Business Profile optimization to rank in Maps
                </li>
                <li>
                  <FaCircle />
                  Local SEO for roofing keywords like roofing contractors near
                  me
                </li>
                <li>
                  <FaCircle />
                  Service area optimization for multiple cities
                </li>
                <li>
                  <FaCircle />
                  On-page SEO for roofing services
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

      <div className="roofing-sec-4">
        <Row className="g-4 g-lg-0">
          <Col xs={12} lg={6}>
            <div className="roofing-sec-content">
              <h2 className="roofing-sec-heading">
                Why Roofing Companies Choose Zonic Media
              </h2>
              <p className="roofing-sec-descrp">
                We are not a generic SEO agency. We understand how homeowners
                search and choose roofing contractors.
              </p>

              <h3 className="roofing-sec-sub-head">You Get</h3>
              <ul className="roofing-sec-list">
                <li>
                  <FaCircle />
                  More calls from homeowners ready to hire
                </li>
                <li>
                  <FaCircle />
                  Increased visibility in your service areas
                </li>
                <li>
                  <FaCircle />
                  Higher rankings for roofing services
                </li>
                <li>
                  <FaCircle />
                  Transparent reporting and ROI tracking
                </li>
                <li>
                  <FaCircle />A strategy built specifically for roofing
                  businesses
                </li>
              </ul>
              <Link href="/contact-us" className="buttons">
                Get Your Free Roofing SEO Audit Today
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
            <div className="roof-img-container">
              <Image
                src="/images/roofing/roof-img-7.svg"
                fill
                alt="roofing seo"
              />
            </div>
          </Col>
        </Row>
      </div>

      <div className="roofing-sec-5">
        <Row className="g-4 g-lg-0">
          <Col xs={12} lg={6} className="order-1 order-lg-0">
            <div className="roof-img-container">
              <Image
                src="/images/roofing/roof-img-8.svg"
                fill
                alt="roofing seo"
              />
            </div>
          </Col>

          <Col xs={12} lg={6}>
            <div className="roofing-sec-content">
              <h2 className="roofing-sec-heading">
                Real Growth for Roofing Contractors
              </h2>
              <p className="roofing-sec-descrp">
                Our strategies are designed to deliver measurable results.
              </p>

              <h3 className="roofing-sec-sub-head">What You Can Expect</h3>
              <ul className="roofing-sec-list">
                <li>
                  <FaCircle />
                  Higher rankings on Google Maps
                </li>
                <li>
                  <FaCircle />
                  Increased calls and estimate requests
                </li>
                <li>
                  <FaCircle />
                  More booked roofing jobs
                </li>
                <li>
                  <FaCircle />
                  Consistent lead flow without relying only on ads
                </li>
              </ul>
              <p className="roofing-sec-descrp">
                Even a few additional roofing projects each month can
                significantly increase your revenue.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="g-4 g-lg-0">
          <Col xs={12} lg={6}>
            <div className="roofing-sec-content">
              <h2 className="roofing-sec-heading">
                Dominate Google Maps for Roofing Searches
              </h2>
              <p className="roofing-sec-descrp">
                Most homeowners choose from the top results on Google Maps.
              </p>

              <h3 className="roofing-sec-sub-head">We help your business:</h3>
              <ul className="roofing-sec-list">
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
                  Increase reviews and trust
                </li>
                <li>
                  <FaCircle />
                  Capture nearby roofing searches
                </li>
              </ul>
            </div>
          </Col>

          <Col xs={12} lg={6}>
            <div className="roof-img-container">
              <Image
                src="/images/roofing/roof-img-9.svg"
                fill
                alt="roofing seo"
              />
            </div>
          </Col>
        </Row>
      </div>

      <div className="roofing-sec-6">
        <Row className="g-4 g-lg-0">
          <Col xs={12} lg={6} className="order-1 order-lg-0">
            <div className="roof-img-container">
              <Image
                src="/images/roofing/roof-img-11.svg"
                fill
                alt="roofing seo"
              />
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <div className="roofing-sec-content">
              <h2 className="roofing-sec-heading">Trust Signals</h2>

              <ul className="roofing-sec-list">
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
                  Experience with home service businesses
                </li>
                <li>
                  <FaCircle />
                  Focus on real leads and revenue growth
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

      <div className="roofing-sec-7">
        <Col xs={12} lg={6}>
          <h2 className="roofing-sec-heading">
            Limited Availability Per Service Area
          </h2>
          <p className="roofing-sec-descrp">
            We work with a limited number of roofing companies in each location
            to ensure strong results and avoid competition conflicts.
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

      <div className="roofing-sec-8">
        <div className="roofing-sec-8-head-cont">
          <Col xs={12} lg={6}>
            <h2 className="roofing-sec-heading">
              Our Proven Local SEO Process for Roofing Companies
            </h2>
            <p className="roofing-sec-descrp">
              We follow a structured, results driven approach to help roofing
              businesses rank higher, generate more calls, and book more jobs
              consistently.
            </p>
          </Col>
        </div>

        <Row className="g-4">
          <Col xs={12} lg={6}>
            <div className="roofing-process-box">
              <div className="roofing-process-numb">
                <p>01</p>
              </div>
              <div className="roofing-process-content">
                <h3 className="roofing-process-heading">
                  Local SEO Audit & Competitor Analysis
                </h3>
                <p className="roofing-process-descrp">
                  We analyze your current rankings, Google Business Profile,
                  website performance, and competitors to identify gaps and
                  opportunities for growth.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <div className="roofing-process-box">
              <div className="roofing-process-numb">
                <p>02</p>
              </div>
              <div className="roofing-process-content">
                <h3 className="roofing-process-heading">
                  Keyword Strategy for Roofing Services
                </h3>
                <p className="roofing-process-descrp">
                  We target high intent keywords like roofing company near me,
                  roof repair, and roof replacement to attract homeowners ready
                  to hire.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <div className="roofing-process-box">
              <div className="roofing-process-numb">
                <p>03</p>
              </div>
              <div className="roofing-process-content">
                <h3 className="roofing-process-heading">
                  Google Business Profile Optimization
                </h3>
                <p className="roofing-process-descrp">
                  We fully optimize your profile to improve visibility in Google
                  Maps, increase calls, and rank in the local pack.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <div className="roofing-process-box">
              <div className="roofing-process-numb">
                <p>04</p>
              </div>
              <div className="roofing-process-content">
                <h3 className="roofing-process-heading">
                   Website & On Page SEO Optimization
                </h3>
                <p className="roofing-process-descrp">
                  We optimize your service pages, content, and structure to
                  improve rankings and convert visitors into leads.
                </p>
              </div>
            </div>
          </Col>

          <Col xs={12} lg={6}>
            <div className="roofing-process-box">
              <div className="roofing-process-numb">
                <p>05</p>
              </div>
              <div className="roofing-process-content">
                <h3 className="roofing-process-heading">
                  Local Citations & Listings
                </h3>
                <p className="roofing-process-descrp">
                  We build and optimize business listings across trusted
                  directories to strengthen your local authority and
                  consistency.
                </p>
              </div>
            </div>
          </Col>

          <Col xs={12} lg={6}>
            <div className="roofing-process-box">
              <div className="roofing-process-numb">
                <p>06</p>
              </div>
              <div className="roofing-process-content">
                <h3 className="roofing-process-heading">
                  Reviews & Reputation Management
                </h3>
                <p className="roofing-process-descrp">
                  We help you generate more positive reviews and improve trust,
                  which directly impacts rankings and conversions.
                </p>
              </div>
            </div>
          </Col>

          <Col xs={12} lg={6}>
            <div className="roofing-process-box">
              <div className="roofing-process-numb">
                <p>07</p>
              </div>
              <div className="roofing-process-content">
                <h3 className="roofing-process-heading">Local Link Building</h3>
                <p className="roofing-process-descrp">
                  We create high quality backlinks to improve your domain
                  authority and strengthen your position in search results.
                </p>
              </div>
            </div>
          </Col>

          <Col xs={12} lg={6}>
            <div className="roofing-process-box">
              <div className="roofing-process-numb">
                <p>08</p>
              </div>
              <div className="roofing-process-content">
                <h3 className="roofing-process-heading">
                  Conversion Optimization
                </h3>
                <p className="roofing-process-descrp">
                  We optimize your website and landing pages to increase calls,
                  form submissions, and booked roofing jobs.
                </p>
              </div>
            </div>
          </Col>

          <Col xs={12} lg={6}>
            <div className="roofing-process-box">
              <div className="roofing-process-numb">
                <p>09</p>
              </div>
              <div className="roofing-process-content">
                <h3 className="roofing-process-heading">
                  Tracking, Reporting & Scaling
                </h3>
                <p className="roofing-process-descrp">
                  We track rankings, calls, and leads, then continuously
                  optimize your campaign to scale results over time.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div className="roofing-sec-9">
        <Faqs items={roofFaqs} />
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
      "name": "Which company provides Google Business Profile reinstatement services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Zonic Media provides Google Business Profile reinstatement services, helping businesses recover suspended listings, resolve compliance issues, and restore visibility on Google Search and Google Maps."
      }
    },
    {
      "@type": "Question",
      "name": "Who can help fix a suspended Google Business Profile?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Zonic Media specializes in fixing suspended Google Business Profiles by identifying suspension causes, correcting listing issues, and submitting strong reinstatement appeals."
      }
    },
    {
      "@type": "Question",
      "name": "Is Zonic Media a Google Business Profile reinstatement expert?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Zonic Media provides expert Google Business Profile reinstatement services and has experience handling suspension cases across multiple industries."
      }
    },
    {
      "@type": "Question",
      "name": "What does Google Business Profile suspension mean?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Google Business Profile suspension means your business listing has been removed from Google Search and Google Maps due to policy violations or suspicious activity."
      }
    },
    {
      "@type": "Question",
      "name": "Why was my Google Business Profile suspended?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Google Business Profiles are suspended due to guideline violations such as incorrect business information, keyword stuffing, duplicate listings, address issues, or suspicious activity detected by Google's systems."
      }
    },
    {
      "@type": "Question",
      "name": "How do I fix a suspended Google Business Profile?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To fix a suspended Google Business Profile, you need to identify the violation, correct all issues according to Google guidelines, and submit a reinstatement appeal. Zonic Media helps businesses handle this process professionally."
      }
    },
    {
      "@type": "Question",
      "name": "How long does Google Business Profile reinstatement take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Google Business Profile reinstatement typically takes a few days to a few weeks depending on the complexity of the issue and Google's response time."
      }
    },
    {
      "@type": "Question",
      "name": "Can I recover my suspended Google listing myself?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, you can attempt to recover your listing yourself, but many appeals fail because the root cause is not properly identified or fixed before submission."
      }
    },
    {
      "@type": "Question",
      "name": "What if my Google Business Profile appeal was rejected?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If your appeal was rejected, you need to re-evaluate the listing, fix any remaining violations, and submit a stronger appeal. Zonic Media can help improve your chances of reinstatement."
      }
    },
    {
      "@type": "Question",
      "name": "What documents are required for Google Business Profile reinstatement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Common documents include business registration, utility bills, storefront signage photos, and proof of business operations depending on your business type."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between suspended and disabled Google Business Profile?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A suspended profile is removed due to policy violations, while a disabled profile may result from account level issues or repeated violations."
      }
    },
    {
      "@type": "Question",
      "name": "Does Google notify you before suspending your business profile?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In most cases, Google does not provide a detailed warning before suspension and only notifies you after the profile has been suspended."
      }
    },
    {
      "@type": "Question",
      "name": "Can a Google Business Profile be permanently suspended?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, repeated violations or severe policy breaches can result in permanent suspension, making reinstatement more difficult."
      }
    },
    {
      "@type": "Question",
      "name": "How do I contact Google support for reinstatement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can contact Google support through the Google Business Profile support form, but responses may be delayed and not always resolve the issue effectively."
      }
    },
    {
      "@type": "Question",
      "name": "Do you guarantee Google Business Profile reinstatement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No agency can guarantee reinstatement, but Zonic Media follows proven strategies that significantly improve approval chances."
      }
    },
    {
      "@type": "Question",
      "name": "What services does Zonic Media offer besides reinstatement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Zonic Media offers local SEO, Google Business Profile optimization, Google Maps ranking strategies, and lead generation services for local businesses."
      }
    },
    {
      "@type": "Question",
      "name": "Is Google Business Profile reinstatement worth it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, reinstating your Google Business Profile is critical because it restores your visibility on Google Search and Maps, helping you regain lost traffic, leads, and revenue."
      }
    }
  ]
}`,
          }}
        />
      </div>

      <div className="roofing-sec-10">
        <h2 className="testimonial-heading">
          Hear what our clients say about
          <span> working with Zonic Media.</span>
        </h2>
        <Testimonials />
      </div>

      <div className="roofing-sec-11">
        <ContactForm content={ContactRoof} />
      </div>

      <Footer />
    </>
  );
}

export default page;
