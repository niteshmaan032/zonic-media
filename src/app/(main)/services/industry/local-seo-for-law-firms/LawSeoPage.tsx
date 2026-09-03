"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Col, Row } from "react-bootstrap";
import Footer from "@/app/components/Footer";
import GmbFaqs from "@/app/components/GmbFaqs";
import HashScrollLink from "@/app/components/HashScrollLink";
import LeadContactForm from "@/app/components/LeadContactForm";
import RecaptchaCheckbox from "@/app/components/RecaptchaCheckbox";
import FormLegalLinks from "@/app/components/FormLegalLinks";
import ClutchWidget from "@/app/components/ClutchWidget";
import { SITE_CONTACT } from "@/shared/siteConfig";
import { RECAPTCHA_ACTION } from "@/shared/recaptcha";
import "@/app/style/carTow.css";
import "@/app/style/philadelphia/philaDigital.css";
import "@/app/style/lawSeo/lawSeo.css";

import {
  FaMapMarkerAlt,
  FaGlobe,
  FaStar,
  FaChartLine,
  FaBullhorn,
  FaCalendarCheck,
  FaSearch,
  FaUsers,
  FaShieldAlt,
  FaExclamationTriangle,
  FaHandshake,
  FaRegClock,
  FaLaptopCode,
  FaArrowRight,
  FaBalanceScale,
  FaGavel,
  FaFileAlt,
  FaMoneyBillWave,
  FaThumbsDown,
} from "react-icons/fa";
import {
  FaArrowTrendUp,
  FaRegCircleCheck,
  FaPhoneVolume,
  FaRankingStar,
  FaRoute,
} from "react-icons/fa6";
import { FiPhoneCall, FiArrowUpRight } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";

/* ─── IMAGE PATHS ─── */
const imgs = {
  hero: "/images/law-seo/ChatGPT Image May 13, 2026, 06_14_24 PM.png",
  maps: "/images/contact-section.jpg",
  img1: "/images/law-seo/ChatGPT Image May 11, 2026, 12_04_02 PM.png",
  img2: "/images/law-seo/ChatGPT Image May 11, 2026, 12_22_52 PM.png",
  img3: "/images/law-seo/ChatGPT Image May 11, 2026, 12_24_33 PM.png",
  img4: "/images/law-seo/ChatGPT Image May 11, 2026, 12_26_21 PM.png",
  img5: "/images/law-seo/ChatGPT Image May 11, 2026, 12_31_37 PM.png",
  img6: "/images/law-seo/ChatGPT Image May 11, 2026, 12_36_03 PM.png",
  img7: "/images/law-seo/ChatGPT Image May 11, 2026, 12_44_27 PM.png",
  img8: "/images/law-seo/ChatGPT Image May 11, 2026, 12_46_23 PM.png",
  contact: "/images/contact-section.jpg",
};

type InlineAuditFormValues = {
  fullName: string;
  contact: string;
  businessName: string;
  message: string;
};

/* ─── ARROW ICON ─── */
const ArrowIcon = () => (
  <span className="buttons__icon-wrapper" aria-hidden="true">
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
);

/* ─── DATA ─── */
const marqueeTerms = [
  "Law firm near me",
  "Personal injury attorney",
  "Family law attorney",
  "Criminal defense lawyer",
  "Business litigation attorney",
  "Employment law firm",
  "Best law firm in my city",
  "Free legal consultation",
  "Top rated attorney nearby",
  "Law firm reviews",
];

const problemCards = [
  {
    icon: <FaMapMarkerAlt />,
    title: "Not Ranking in Google Maps",
    text: "When a potential client searches for an attorney in your area, your firm does not appear in the top local results. Competitors with stronger local SEO signals are capturing those case inquiries before your phone even rings.",
  },
  {
    icon: <FaGlobe />,
    title: "Weak Local SEO Signals",
    text: "Inconsistent business information, thin service pages, missing local citations, and low engagement signals all suppress your firm's visibility in local search and Google Maps pack results.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Website Visitors Not Converting",
    text: "Your website receives traffic but very few visitors take the next step. Poor structure, unclear practice area pages, buried contact forms, or slow load times drive potential clients away before they ever reach out.",
  },
  {
    icon: <FaUsers />,
    title: "Competitors Dominating Legal Search",
    text: "Other firms in your market have stronger Google Business Profiles, more practice area content, better review strategies, and higher-ranking websites - and they are winning the case inquiries you should be generating.",
  },
  {
    icon: <FaExclamationTriangle />,
    title: "Low Review Volume or Weak Trust",
    text: "Prospective clients make trust decisions quickly. Firms with fewer recent reviews, incomplete profiles, or no visible credentials lose consultations to competitors who appear more established and credible online.",
  },
  {
    icon: <FaChartLine />,
    title: "No Clear Lead Tracking System",
    text: "Without proper call tracking and form attribution, you cannot identify which marketing efforts are generating real case inquiries - making it impossible to make intelligent decisions about where to invest your budget.",
  },
];

const journeyChecklist = [
  "Appear prominently in local legal search results",
  "Demonstrate expertise through practice area content",
  "Build immediate trust through recent reviews",
  "Display credentials and experience clearly",
  "Make contacting or scheduling a consultation effortless",
  "Load quickly and look professional on every device",
];

const systemCards = [
  {
    tag: "Foundation",
    icon: <FaMapMarkerAlt />,
    title: "Local SEO and Google Maps Optimization",
    text: "We optimize your firm's local presence for the practice areas and locations where your ideal clients are searching. From local keyword targeting to service area signals, we position your firm to appear when it matters most.",
  },
  {
    tag: "Visibility",
    icon: <FaGavel />,
    title: "Google Business Profile Optimization",
    text: "Your Google Business Profile is the single most visible element in local legal searches. We optimize every field - practice areas, descriptions, photos, Q&A, review responses, and posting cadence - to maximize local map ranking.",
  },
  {
    tag: "Content",
    icon: <FaFileAlt />,
    title: "Practice Area SEO Content Strategy",
    text: "We build or improve targeted practice area pages, location landing pages, and FAQ content that helps Google understand who you serve, what you handle, and why your firm is the most relevant result for high-intent legal searches.",
  },
  {
    tag: "Conversion",
    icon: <FaLaptopCode />,
    title: "Web Design Services for Law Firm Marketing",
    text: "We design and improve law firm websites that communicate authority immediately, explain practice areas with clarity, display trust signals prominently, and make it simple for a prospective client to schedule a consultation or call.",
  },
  {
    tag: "Reputation",
    icon: <FaStar />,
    title: "Review and Reputation Growth",
    text: "We build a systematic review generation process that steadily grows your firm's review count and rating on Google and relevant legal directories. More credible, recent reviews directly improve map rankings and client conversion rates.",
  },
  {
    tag: "Tracking",
    icon: <FaChartLine />,
    title: "Call Tracking and Lead Quality Optimization",
    text: "We set up proper call tracking, form attribution, and lead source reporting so you know exactly which channels are generating real case inquiries. This data drives smarter budget decisions and ongoing campaign improvements.",
  },
  {
    tag: "Social",
    icon: <FaBullhorn />,
    title: "Social Media Marketing Services for Law Firms",
    text: "Our social media marketing services for law firms build brand awareness, reinforce your authority in key practice areas, and keep your firm visible to prospective clients across platforms where your target audience is active.",
  },
];

const benefitPoints = [
  "More qualified case inquiries every month",
  "Stronger Google Maps visibility in your service area",
  "Greater local authority across practice area searches",
  "Better website conversion from visitor to consultation",
  "Improved trust through consistent review growth",
  "Lower long-term cost per qualified lead over time",
];

const benefitCards = [
  {
    icon: <FaBalanceScale />,
    title: "More Qualified Case Inquiries",
    text: "Attract prospective clients who are actively searching for legal help in your practice areas - not general web visitors unlikely to need your specific services.",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Better Google Maps Visibility",
    text: "Appear in the local map pack when potential clients in your area search for legal representation. Map visibility is where the majority of local legal search decisions are made.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Stronger Local Authority",
    text: "Build credibility signals across Google, legal directories, and your website that establish your firm as the most visible and trustworthy option in your market.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Better Website Conversion",
    text: "Turn more of your existing organic traffic into actual consultation requests by improving practice area messaging, website structure, and the overall experience prospective clients have on your site.",
  },
  {
    icon: <FaStar />,
    title: "More Trust Through Reviews",
    text: "A steady stream of genuine, recent client reviews on Google directly improves your rankings and gives prospective clients the social proof they need to confidently contact your firm.",
  },
  {
    icon: <FaRegClock />,
    title: "Lower Long-Term Cost Per Lead",
    text: "Unlike paid legal advertising that stops generating leads when you stop spending, SEO builds lasting visibility that compounds over time and steadily reduces your cost per qualified inquiry.",
  },
];

const notWorkingCards = [
  {
    icon: <FaSearch />,
    title: "Competitors Win High-Intent Searches",
    text: "Other law firms with stronger local SEO will capture the case inquiries from clients actively searching for an attorney in your practice areas - searches that should be reaching your firm first.",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Paid Ads Get Expensive Without Organic Support",
    text: "Legal pay-per-click costs are among the highest of any industry. Without a strong organic and local SEO foundation, you will pay top dollar for every click and see diminishing returns over time.",
  },
  {
    icon: <FaGlobe />,
    title: "Website Traffic Does Not Become Consultations",
    text: "Without conversion-focused web design and clear practice area content, prospective clients who do visit your website will leave without taking action - and contact a competing firm instead.",
  },
  {
    icon: <FaThumbsDown />,
    title: "No Review or Reputation Management System",
    text: "Without a proactive strategy for generating and managing reviews, your firm's credibility stays weak in Google's eyes and in the minds of prospective clients comparing their options.",
  },
  {
    icon: <FaExclamationTriangle />,
    title: "No Clear Marketing Strategy or Direction",
    text: "Ad hoc marketing efforts without a coordinated strategy produce inconsistent, unpredictable results. Without a structured system, your growth depends on chance rather than a repeatable process.",
  },
  {
    icon: <FaChartLine />,
    title: "Leads Are Not Tracked or Attributed",
    text: "Without proper call and form tracking, you have no visibility into which marketing efforts are producing real case inquiries - making every budget decision a guess rather than a data-driven choice.",
  },
];

const caseStudyStats = [
  {
    icon: <FaPhoneVolume />,
    label: "Google Business Profile calls",
    before: "18/mo",
    after: "52/mo",
    detail:
      "More direct consultation calls from prospective clients searching for legal help in the firm's practice areas.",
  },
  {
    icon: <FaRankingStar />,
    label: "Top-3 map pack rankings",
    before: "2 keywords",
    after: "11 keywords",
    detail:
      "Broader local map pack coverage across the core practice area terms that drive high-intent legal search traffic.",
  },
  {
    icon: <FaRoute />,
    label: "Practice area pages indexed",
    before: "3 indexed",
    after: "14 indexed",
    detail:
      "Stronger organic presence across key practice areas, improving relevance signals for both Google and prospective clients.",
  },
  {
    icon: <FaCalendarCheck />,
    label: "Consultation requests",
    before: "Unstable",
    after: "Consistent monthly flow",
    detail:
      "A steadier, more predictable stream of inbound consultation requests from qualified prospective clients in the firm's market.",
  },
];

const seoFactors = [
  "Visibility model",
  "Cost per lead",
  "Authority building",
  "Search intent quality",
  "Long-term value",
];

const seoPoints = [
  "Compounds over time through local and domain authority signals",
  "Decreases as rankings strengthen and organic traffic grows",
  "Builds real local trust, credibility, and directory presence",
  "Captures high-intent legal searches at no per-click cost",
  "Every improvement adds lasting value to your firm's presence",
];

const adsPoints = [
  "Immediate visibility but stops the moment the budget stops",
  "Stays high or increases in competitive legal markets",
  "Generates clicks without building domain or local authority",
  "Can be poorly targeted; quality varies by campaign setup",
  "Visibility disappears completely when you pause spending",
];

const whyCards = [
  {
    icon: <FaGavel />,
    title: "We Focus on Qualified Consultations",
    text: "Our law firm marketing services are measured by consultation requests and case inquiries - not impressions, clicks, or vanity metrics that do not translate into real business growth.",
  },
  {
    icon: <FaSearch />,
    title: "We Understand Local Legal Search Intent",
    text: "People searching for attorneys have specific, urgent needs. Our marketing services for law firms are built around how real prospective clients search, compare, and make contact decisions online.",
  },
  {
    icon: <FaLaptopCode />,
    title: "We Build Conversion-Focused Law Firm Websites",
    text: "Our web design services for law firm marketing focus on communicating authority clearly, explaining practice areas accessibly, and making it effortless for a prospective client to schedule a consultation.",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "We Improve Google Maps Visibility",
    text: "Local map rankings are where most legal case inquiries originate. Our law firm digital marketing services focus heavily on the local signals that move your firm up in Google Maps results.",
  },
  {
    icon: <FaArrowTrendUp />,
    title: "We Connect SEO, Content, Reviews, and Tracking",
    text: "Our integrated approach to law firm digital marketing services ensures that local SEO, practice area content, reputation growth, and lead tracking all work together as a single, coordinated system.",
  },
  {
    icon: <FaChartLine />,
    title: "We Provide Transparent Performance Reporting",
    text: "You will always know what your law firm marketing services investment is producing. We deliver regular reporting on rankings, calls, form submissions, and lead quality so you can see the ROI clearly.",
  },
  {
    icon: <FaShieldAlt />,
    title: "We Understand Legal Industry Trust Factors",
    text: "Prospective legal clients are cautious and selective. We incorporate trust signals - credentials, reviews, practice area depth, and clear communication - into every aspect of your digital presence.",
  },
  {
    icon: <FaHandshake />,
    title: "We Limit Law Firms Per Market",
    text: "We work with a limited number of law firms per market to avoid conflicts of interest and ensure every client receives a focused, undivided marketing strategy tailored to their specific competitive landscape.",
  },
];

const journeySupportCards = [
  {
    icon: <FaSearch />,
    title: "Clients compare fast",
    text: "Most legal prospects shortlist just a few firms, then decide based on credibility, reviews, and how easy it is to contact you.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Trust signals matter first",
    text: "Clear practice areas, recent reviews, and a professional web presence reduce hesitation before the first call.",
  },
];

const heroStats = [
  {
    label: "Local SEO",
    stat: "200%",
  },
  {
    label: "Google Maps Ranking",
    stat: "3x",
  },
  {
    label: "Legal Website Conversion",
    stat: "95%",
  },
  {
    label: "Reputation Growth",
    stat: "150+",
  },
];

const processSteps = [
  {
    step: "01",
    icon: <FaSearch />,
    title: "Audit and Market Analysis",
    text: "We conduct a thorough review of your current online presence, local search performance, competitor positioning, Google Business Profile health, and website conversion gaps - identifying exactly where your firm is losing case inquiries and what needs to change first.",
  },
  {
    step: "02",
    icon: <FaBalanceScale />,
    title: "Strategy and Planning",
    text: "We build a law firm digital marketing strategy specific to your practice areas, target market, and competitive landscape. This includes local keyword targeting, GBP optimization priorities, content planning, and a structured approach to reputation and conversion improvement.",
  },
  {
    step: "03",
    icon: <FaLaptopCode />,
    title: "Website, Local SEO, and Content",
    text: "We implement technical and on-page improvements to your website, optimize your Google Business Profile, build or refine targeted practice area content, strengthen local citation signals, and set up proper call and form tracking.",
  },
  {
    step: "04",
    icon: <FaChartLine />,
    title: "Reputation, Tracking, and Growth",
    text: "We launch a systematic review generation process, monitor rankings and lead quality, and deliver monthly performance reporting. Every month we identify new opportunities and adjust the strategy to ensure your law firm's marketing keeps improving over time.",
  },
];

const faqs = [
  {
    question: "What are law firm marketing services?",
    answer:
      "Law firm marketing services refer to the full range of digital strategies used to help attorneys and law firms attract more qualified case inquiries. This includes local SEO, Google Business Profile optimization, practice area content strategy, conversion-focused website design, reputation management, social media marketing, and lead tracking. The goal is to build a consistent, predictable flow of prospective client consultations.",
  },
  {
    question: "How does local SEO help law firms get more cases?",
    answer:
      "Local SEO helps your law firm appear in Google Maps and local search results when prospective clients in your area are searching for legal help. When your firm ranks prominently for practice area searches, you capture more high-intent inquiries from people who are actively looking for the type of legal representation you provide. This is the most cost-effective long-term strategy for consistent case inquiry growth.",
  },
  {
    question: "How long does law firm SEO take to produce results?",
    answer:
      "Most law firms begin to see measurable early improvements within 2 to 3 months, particularly from Google Business Profile optimization. Meaningful ranking gains in organic and local search typically develop between 4 and 6 months of sustained effort. The timeline depends on your current online presence, your market's competition level, and how aggressively you invest in content and link authority.",
  },
  {
    question:
      "Do you help with Google Business Profile optimization for law firms?",
    answer:
      "Yes. Google Business Profile optimization is one of our primary focus areas for law firm clients. We optimize every element of your GBP including practice area categories, descriptions, photos, Q&A, posting strategy, and review responses. A well-optimized GBP is the most direct lever for improving Google Maps visibility and generating more direct calls and consultation requests.",
  },
  {
    question: "Do you offer social media marketing services for law firms?",
    answer:
      "Yes. Our social media marketing services for law firms help build brand awareness, establish authority in your practice areas, and keep your firm visible to prospective clients between searches. We create content strategies tailored to legal industry audiences and align social efforts with your broader local SEO and content strategy for a consistent brand presence.",
  },
  {
    question:
      "Can you improve an existing law firm website that is not converting?",
    answer:
      "Yes. Many law firms have websites that generate traffic but fail to convert visitors into consultation requests. Our web design services for law firm marketing focus on improving practice area clarity, strengthening trust signals, streamlining the contact flow, improving page speed, and making the overall experience more compelling for prospective clients who are evaluating their legal options.",
  },
  {
    question: "Is SEO better than Google Ads for law firms?",
    answer:
      "SEO builds long-term local authority and compounds over time, making it the more sustainable investment for most law firms. Google Ads can generate faster short-term visibility and are useful for specific campaigns, but they become expensive in competitive legal markets and stop generating leads the moment you pause spending. The most effective approach for most firms is a strong SEO foundation supported by strategic paid campaigns when specific short-term goals require it.",
  },
  {
    question:
      "What makes Zonic Media different from other law firm marketing agencies?",
    answer:
      "Zonic Media focuses on qualified case inquiries rather than vanity metrics. We build integrated law firm marketing strategies - connecting local SEO, practice area content, website conversion, reviews, and tracking - into one coordinated system. We limit the number of law firms we work with per market to avoid conflicts of interest, and we provide transparent monthly reporting so you always understand what your marketing investment is producing.",
  },
];

const lawContactFormHead = {
  leadFormTitle: "Ready to Grow Your Law Firm?",
  leadCallText: (
    <>
      Let&apos;s build a law firm marketing strategy that drives more qualified
      case inquiries, stronger local visibility, and consistent lead growth.
      <br />{" "}
      <a href="tel:+13027269736" className="lead-call-link">
        Call Now: (302) 726-9736
      </a>
    </>
  ),
};

/* ─── COMPONENT ─── */
export default function LawSeoPage() {
  const [highlightedUpTo, setHighlightedUpTo] = useState(0);
  const lineControls = useAnimation();
  const cancelledRef = useRef(false);
  const processSectionRef = useRef<HTMLElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const [submitError, setSubmitError] = useState("");
  const [smsConsent, setSmsConsent] = useState(true);
  const recaptchaExecutorRef = useRef<(() => Promise<string>) | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<InlineAuditFormValues>({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      fullName: "",
      contact: "",
      businessName: "",
      message: "",
    },
  });

  const onInlineAuditSubmit = async (data: InlineAuditFormValues) => {
    setSubmitError("");

    try {
      const recaptchaToken = await recaptchaExecutorRef.current?.();

      if (!recaptchaToken) {
        throw new Error("reCAPTCHA is not ready yet. Please try again.");
      }

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "gmb-reinstatement",
          sourcePage: pathname,
          pageUrl: window.location.href,
          fullName: data.fullName,
          email: SITE_CONTACT.email,
          contact: data.contact,
          businessName: data.businessName,
          message: `Business Name: ${data.businessName}. Issue: ${data.message}`,
          services: ["Google My Business (GMB)"],
          smsConsent,
          recaptchaToken,
        }),
      });

      const result = (await response.json().catch(() => null)) as {
        message?: string;
      } | null;

      if (!response.ok) {
        throw new Error(result?.message || "Failed to submit form.");
      }

      reset();
      sessionStorage.setItem(
        "thank_you_access_allowed_at",
        Date.now().toString(),
      );
      router.push("/thank-you");
    } catch (error) {
      console.error("Inline audit form submission failed:", error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  };

  useEffect(() => {
    document.body.classList.add("law-seo-navbar-active");
    return () => {
      document.body.classList.remove("law-seo-navbar-active");
    };
  }, []);

  useEffect(() => {
    const section = processSectionRef.current;
    if (!section) return;
    cancelledRef.current = false;

    const run = async () => {
      await new Promise<void>((r) => setTimeout(r, 400));
      for (let step = 1; step < processSteps.length; step++) {
        if (cancelledRef.current) return;
        const pct = (step / (processSteps.length - 1)) * 100;
        await lineControls.start({
          width: `${pct}%`,
          transition: { duration: 1.5, ease: "easeInOut" },
        });
        if (cancelledRef.current) return;
        setHighlightedUpTo(step);
        if (step < processSteps.length - 1) {
          await new Promise<void>((r) => setTimeout(r, 2200));
        }
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          observer.disconnect();
          run();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(section);
    return () => {
      cancelledRef.current = true;
      lineControls.stop();
      observer.disconnect();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <main className="law-seo-page">
      {/* ─── HERO ─── */}
      <section
        className="car-tow-hero"
        style={{ backgroundImage: `url("${imgs.hero}")` }}
      >
        <div className="car-tow-hero-layer">
          <div className="car-tow-container">
            <Row>
              <Col lg={9} className="car-tow-hero-copy">
                <p className="car-tow-eyebrow">Law Firm Marketing Services</p>
                <h1 className="law-hero-title">
                  Helping Law Firms Rank, Convert, and Grow Faster
                </h1>
                <p className="car-tow-hero-sub-head">
                  Local SEO, Google Maps Ranking, Legal Website Conversion,
                  Reputation Growth
                </p>
                <p className="car-tow-hero-body">
                  Zonic Media provides{" "}
                  <Link
                    href="/services/law-firm-marketing-agency"
                    className="law-inline-link"
                  >
                    law firm marketing services
                  </Link>{" "}
                  that build a
                  consistent flow of qualified case inquiries through local SEO,
                  Google Maps optimization, conversion-focused web design, and
                  reputation growth. If your firm is not generating predictable
                  consultation requests every month, there is a visibility and
                  conversion gap worth solving.
                </p>
                <div className="car-tow-hero-actions">
                  <HashScrollLink
                    href="#law-contact-form"
                    className="buttons"
                    offset={120}
                  >
                    Get Your Free Law Firm Marketing Audit
                    <ArrowIcon />
                  </HashScrollLink>
                  <HashScrollLink
                    href="#law-contact-form"
                    className="buttons car-tow-button-secondary"
                    offset={120}
                  >
                    See How Many Cases You Are Missing
                    <ArrowIcon />
                  </HashScrollLink>
                </div>
                <div className="car-tow-trust-grid">
                  {heroStats.map((item) => (
                    <div
                      className="car-tow-trust-card law-hero-stat-card"
                      key={item.label}
                    >
                      <strong>{item.stat}</strong>
                      <span className="law-hero-stat-label">{item.label}</span>
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <div className="car-tow-marquee" aria-label="Legal search terms">
          <div className="car-tow-marquee-track">
            {[...marqueeTerms, ...marqueeTerms].map((term, i) => (
              <span key={`${term}-${i}`}>
                <FiArrowUpRight />
                {term}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CORE CHALLENGE ─── */}
      <section className="car-tow-section" id="law-problems">
        <div className="car-tow-container">
          <div className="car-tow-center-head">
            <div className="car-tow-center-head-content">
              <p className="car-tow-eyebrow">The Core Challenge</p>
              <h2>
                Why Most Law Firms Struggle to Generate Consistent Case
                Inquiries
              </h2>
              <p className="car-tow-section-descrp">
                There is no shortage of demand for legal services. People facing
                legal problems are searching for attorneys every day. The
                challenge for most law firms is not demand - it is a
                visibility and conversion problem. They are not being found when
                it matters, and when found, they are not compelling enough to
                prompt contact.
              </p>
            </div>
          </div>
          <Row className="g-4">
            {problemCards.map((card) => (
              <Col lg={4} md={6} key={card.title} className="d-flex">
                <article className="car-tow-info-card">
                  <div className="car-tow-icon-box">{card.icon}</div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              </Col>
            ))}
          </Row>
          <div
            className="car-tow-final-cta law-cta-banner law-cta-banner-tight"
            style={{ marginTop: "40px", padding: "40px" }}
          >
            <p className="car-tow-eyebrow">Start With a Free Audit</p>
            <h2>Find Out Exactly Where Your Firm is Losing Case Inquiries</h2>
            <p>
              Request a free law firm marketing audit and we will review your
              <Link
                href="/services/local-seo-for-home-services"
                className="law-inline-link"
              >
                local SEO
              </Link>{" "}
              performance, Google Business Profile, website conversion rate, and
              competitive positioning in your market. We can also flag whether
              you need to{" "}
              <Link
                href="/services/gmb-verification-help"
                className="law-inline-link"
              >
                verify your GBP
              </Link>{" "}
              or recover a{" "}
              <Link
                href="/services/gmb-reinstatement-help"
                className="law-inline-link"
              >
                suspended Google Business Profile
              </Link>
              .
            </p>
            <div
              className="car-tow-hero-actions car-tow-final-actions"
              style={{ marginTop: "20px" }}
            >
              <HashScrollLink
                href="#law-contact-form"
                className="buttons"
                offset={120}
              >
                Get a Free Audit
                <ArrowIcon />
              </HashScrollLink>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CLIENT JOURNEY ─── */}
      <section className="car-tow-section car-tow-section-alt">
        <div className="car-tow-container">
          <Row className="gy-4 align-items-start">
            <Col lg={6}>
              <div className="car-tow-split-copy">
                <p className="car-tow-eyebrow">Understanding Client Behavior</p>
                <h2>How Potential Clients Actually Choose a Law Firm Online</h2>
                <h3 className="car-tow-sub-heading">
                  Prospective Legal Clients are Searching with Urgency. They
                  Compare a Short List of Options Quickly and Contact the Firm
                  That Appears Most Credible, Accessible, and Relevant.
                </h3>
                <p>
                  People facing legal challenges are not leisurely browsing law
                  firm websites. They are searching because something has gone
                  wrong and they need qualified help. They scan two or three top
                  results, check reviews and practice areas, evaluate the
                  quality of the firm&apos;s web presence, and make a contact
                  decision in under a minute. The firm that looks authoritative,
                  is easy to reach, and communicates relevant expertise
                  consistently wins that consultation.
                </p>
                <p>
                  Marketing services for law firms need to account for this
                  compressed decision process. Your entire online presence -
                  from your Google Maps listing and reviews to your
                  website&apos;s practice area pages and contact flow - must
                  work together to build trust and prompt action in a very short
                  window of time.
                </p>
                <ul className="car-tow-check-list">
                  {journeyChecklist.map((item, i) => (
                    <li key={i}>
                      <FaRegCircleCheck />
                      {item}
                    </li>
                  ))}
                </ul>
                <div>
                  <HashScrollLink
                    href="#law-contact-form"
                    className="buttons"
                    offset={120}
                  >
                    Get a Free Audit
                    <ArrowIcon />
                  </HashScrollLink>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="law-journey-visual-stack">
                <div className="car-tow-image-frame law-journey-image-frame">
                  <img
                    src={imgs.img1}
                    alt="Attorney consulting with client - how prospective clients choose a law firm online"
                  />
                </div>
                <div className="law-journey-support-grid">
                  {journeySupportCards.map((item) => (
                    <article
                      key={item.title}
                      className="law-journey-support-card"
                    >
                      <div
                        className="law-journey-support-icon"
                        aria-hidden="true"
                      >
                        {item.icon}
                      </div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </article>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* ─── MARKETING SYSTEM (dark) ─── */}
      <section className="car-tow-section car-tow-section-dark">
        <div className="car-tow-container">
          <div className="car-tow-center-head">
            <div className="car-tow-center-head-content car-tow-center-head-content-light">
              <p className="car-tow-eyebrow">Our System</p>
              <h2>Our Law Firm Digital Marketing System</h2>
              <p className="car-tow-section-descrp">
                Zonic Media does not offer isolated marketing tactics. We build
                a complete law firm digital marketing system that connects local
                SEO, Google Maps optimization, website conversion, reputation
                growth, content strategy, and lead tracking into one coordinated
                approach focused on generating qualified case inquiries.
              </p>
            </div>
          </div>
          <Row className="g-4 align-items-stretch">
            {systemCards.slice(0, 6).map((card) => (
              <Col lg={4} md={6} key={card.title} className="d-flex">
                <article className="car-tow-service-card">
                  <div className="car-tow-service-icon">{card.icon}</div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              </Col>
            ))}
          </Row>
          <div
            className="car-tow-final-cta law-cta-banner law-cta-banner-spacious"
            style={{
              marginTop: "48px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <p className="car-tow-eyebrow">Ready to See the Full Strategy?</p>
            <h2>Book a Free Law Firm Marketing Discovery Call</h2>
            <p>
              Let&apos;s walk through what your firm needs to generate more
              qualified consultations from local search. We will review your
              current visibility and outline the specific steps that will move
              the needle in your market.
            </p>
            <div
              className="car-tow-hero-actions car-tow-final-actions"
              style={{ marginTop: "20px" }}
            >
              <HashScrollLink
                href="#law-contact-form"
                className="buttons"
                offset={120}
              >
                Book a Free Call
                <ArrowIcon />
              </HashScrollLink>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONNECTED SYSTEM SPLIT (image + copy) ─── */}
      <section className="car-tow-section">
        <div className="car-tow-container">
          <Row className="align-items-start gy-4">
            <Col lg={5}>
              <div className="car-tow-image-frame law-connected-image-frame">
                <img
                  src={imgs.img4}
                  alt="Law firm growth and local SEO strategy visual"
                />
              </div>
              <div
                className="law-connected-phone law-connected-old"
                aria-label="Local law firm map results preview"
              >
                <div className="law-connected-phone-frame">
                  <div className="law-connected-status">
                    <span>9:41</span>
                    <span>5G</span>
                  </div>
                  <div className="law-connected-search">
                    <span>Best law firms</span>
                    <span aria-hidden="true">+</span>
                  </div>
                  <div className="law-connected-chip-row">
                    <span>Open now</span>
                    <span>Top rated</span>
                    <span>More filters</span>
                  </div>
                  <div className="law-connected-map">
                    <div className="law-connected-pin law-connected-pin-1">
                      <FaBalanceScale />
                    </div>
                    <div className="law-connected-pin law-connected-pin-2">
                      <FaBalanceScale />
                    </div>
                    <div className="law-connected-pin law-connected-pin-3">
                      <FaBalanceScale />
                    </div>
                    <div className="law-connected-pin law-connected-pin-4">
                      <FaBalanceScale />
                    </div>
                    <div className="law-connected-user-dot" />
                    <div className="law-connected-map-label law-connected-map-label-center">
                      DOWNTOWN
                    </div>
                    <div className="law-connected-map-label law-connected-map-label-right">
                      RIVERFRONT
                    </div>
                  </div>
                  <div className="law-connected-sheet">
                    <div className="law-connected-sheet-handle" />
                    <article className="law-connected-result-card">
                      <div>
                        <h3>Best Law Firm</h3>
                        <p>4.8 stars , Personal injury lawyer</p>
                        <span>Open , Riverfront Ave</span>
                      </div>
                      <div className="law-connected-result-actions">
                        <span>
                          <FaPhoneVolume />
                        </span>
                        <span>
                          <FaRoute />
                        </span>
                      </div>
                    </article>
                    <article className="law-connected-result-card">
                      <div>
                        <h3>Best Law Firm</h3>
                        <p>4.7 stars , Corporate lawyer</p>
                        <span>Open , Harborview Dr</span>
                      </div>
                      <div className="law-connected-result-actions">
                        <span>
                          <FaPhoneVolume />
                        </span>
                        <span>
                          <FaRoute />
                        </span>
                      </div>
                    </article>
                    <article className="law-connected-result-card">
                      <div>
                        <h3>Best Law Firm</h3>
                        <p>4.6 stars , Family law attorney</p>
                        <span>Open , Court St</span>
                      </div>
                      <div className="law-connected-result-actions">
                        <span>
                          <FaPhoneVolume />
                        </span>
                        <span>
                          <FaRoute />
                        </span>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={7}>
              <div className="car-tow-feature-copy car-tow-feature-copy-split">
                <p className="car-tow-eyebrow">The Connected Approach</p>
                <h2>A Connected System for Steady Law Firm Inquiry Growth.</h2>
                <h3 className="car-tow-sub-heading">
                  Your Local Visibility, Trust Signals, and Consultation Path
                  Need to Work Together.
                </h3>
                <p>
                  We connect{" "}
                  <Link
                    href="/local-seo-google-business-optimization"
                    className="law-inline-link"
                  >
                    Google Business Profile optimization
                  </Link>
                  , practice area content, local signals, reviews, and{" "}
                  <Link href="/services/web-design" className="law-inline-link">
                    conversion-focused web design
                  </Link>{" "}
                  into one coordinated system that helps your firm win
                  more high-intent legal searches and turn them into
                  consultations.
                </p>
                <ul className="car-tow-check-list">
                  <li>
                    <FaRegCircleCheck />
                    Better rankings for practice area and attorney search terms
                  </li>
                  <li>
                    <FaRegCircleCheck />
                    Stronger consultation conversion from Google Maps and
                    organic traffic
                  </li>
                  <li>
                    <FaRegCircleCheck />
                    Broader local visibility across your full service area
                  </li>
                </ul>
                <div>
                  <HashScrollLink
                    href="#law-contact-form"
                    className="buttons"
                    offset={120}
                  >
                    Start Building Your Law Firm&apos;s System
                    <ArrowIcon />
                  </HashScrollLink>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* ─── BENEFITS (GREENISH) ─── */}
      <section className="car-tow-section law-inline-form-section">
        <div className="car-tow-container">
          <div className="law-inline-form-banner">
            <div className="law-inline-form-copy">
              <p className="car-tow-eyebrow">Quick Audit Request</p>
              <h2>Start Your Free Law Firm Visibility Review.</h2>
              <p>
                Share your firm details below and we will review your rankings,
                Maps presence, and conversion gaps.
              </p>
            </div>
            <form
              className="law-inline-audit-form"
              onSubmit={handleSubmit(onInlineAuditSubmit)}
              noValidate
            >
              <div className="law-inline-field">
                <input
                  type="text"
                  placeholder="Full name"
                  aria-label="Full name"
                  aria-invalid={errors.fullName ? "true" : "false"}
                  {...register("fullName", {
                    required: "Full name is required.",
                    minLength: {
                      value: 2,
                      message: "Full name must be at least 2 characters.",
                    },
                    maxLength: {
                      value: 100,
                      message: "Full name must be at most 100 characters.",
                    },
                  })}
                />
                {errors.fullName && (
                  <p className="text-danger mt-2 mb-0">
                    {errors.fullName.message}
                  </p>
                )}
              </div>
              <div className="law-inline-field">
                <input
                  type="tel"
                  placeholder="Phone number"
                  aria-label="Phone number"
                  inputMode="numeric"
                  aria-invalid={errors.contact ? "true" : "false"}
                  onInput={(event) => {
                    const target = event.currentTarget as HTMLInputElement;
                    target.value = target.value.replace(/[^0-9]/g, "");
                  }}
                  {...register("contact", {
                    required: "Phone number is required.",
                    pattern: {
                      value: /^[0-9]{7,15}$/,
                      message:
                        "Phone number must contain only digits (7 to 15).",
                    },
                  })}
                />
                {errors.contact && (
                  <p className="text-danger mt-2 mb-0">
                    {errors.contact.message}
                  </p>
                )}
              </div>
              <div className="law-inline-field">
                <input
                  type="text"
                  placeholder="Business name"
                  aria-label="Business name"
                  aria-invalid={errors.businessName ? "true" : "false"}
                  {...register("businessName", {
                    required: "Business name is required.",
                    minLength: {
                      value: 2,
                      message: "Business name must be at least 2 characters.",
                    },
                    maxLength: {
                      value: 100,
                      message: "Business name must be at most 100 characters.",
                    },
                  })}
                />
                {errors.businessName && (
                  <p className="text-danger mt-2 mb-0">
                    {errors.businessName.message}
                  </p>
                )}
              </div>
              <div className="law-inline-field">
                <textarea
                  placeholder="Your message"
                  aria-label="Your message"
                  rows={1}
                  aria-invalid={errors.message ? "true" : "false"}
                  {...register("message", {
                    required: "Message is required.",
                    minLength: {
                      value: 5,
                      message: "Message must be at least 5 characters.",
                    },
                    maxLength: {
                      value: 1800,
                      message: "Message must be at most 1800 characters.",
                    },
                  })}
                />
                {errors.message && (
                  <p className="text-danger mt-2 mb-0">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <div className="law-inline-audit-form-recaptcha">
                <RecaptchaCheckbox
                  action={RECAPTCHA_ACTION}
                  onExecutorReady={(executor) => {
                    recaptchaExecutorRef.current = executor;
                  }}
                  onSmsConsentChange={setSmsConsent}
                />
              </div>
              {submitError && (
                <p className="text-danger text-center mb-0 law-inline-audit-error">
                  {submitError}
                </p>
              )}
              <button type="submit" className="buttons" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Get a Free Audit"}
                <ArrowIcon />
              </button>
              <FormLegalLinks />
            </form>
          </div>
        </div>
      </section>

      <section className="car-tow-section law-benefits-section">
        <div className="car-tow-container">
          <Row className="gy-4 align-items-start">
            <Col lg={6}>
              <div
                className="car-tow-image-frame"
                style={{ borderColor: "rgba(42,161,93,0.2)" }}
              >
                <img
                  src={imgs.img3}
                  alt="Law firm growth results after working with Zonic Media marketing services"
                />
              </div>
            </Col>
            <Col lg={6}>
              <div className="car-tow-split-copy">
                <p className="car-tow-eyebrow">After Choosing Zonic Media</p>
                <h2>What a Focused Law Firm Marketing Strategy Produces</h2>
                <h3 className="car-tow-sub-heading">
                  When Law Firm Digital Marketing Services are Executed
                  Correctly, the Impact Goes Well Beyond Increased Website
                  Traffic - It Creates a Sustainable Case Inquiry Engine.
                </h3>
                <p>
                  Law firms working with a structured marketing system see
                  improvements across every stage of the client acquisition
                  process: more visibility in local search, better first
                  impressions from stronger reviews, improved website
                  conversion, and clearer attribution of which marketing efforts
                  are generating real cases.
                </p>
                <ul className="car-tow-check-list">
                  {benefitPoints.map((item, i) => (
                    <li key={i}>
                      <FaRegCircleCheck />
                      {item}
                    </li>
                  ))}
                </ul>
                <div>
                  <HashScrollLink
                    href="#law-contact-form"
                    className="buttons"
                    offset={120}
                  >
                    Get Started With Your Free Audit
                    <ArrowIcon />
                  </HashScrollLink>
                </div>
              </div>
            </Col>
          </Row>

          <div className="car-tow-results-grid" style={{ marginTop: "48px" }}>
            {benefitCards.map((card) => (
              <article className="car-tow-result-item" key={card.title}>
                <div className="car-tow-result-icon" aria-hidden="true">
                  {card.icon}
                </div>
                <div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NOT WORKING (REDDISH) ─── */}
      <section className="car-tow-section law-notworking-section">
        <div className="car-tow-container">
          <div>
            <div
              className="car-tow-center-head"
              style={{ justifyContent: "flex-start", marginBottom: "32px" }}
            >
              <div
                className="car-tow-center-head-content"
                style={{ alignItems: "flex-start", textAlign: "left" }}
              >
                <p className="car-tow-eyebrow">Without a Strategy</p>
                <h2>Common Problems Law Firms Face Without Zonic Media</h2>
                <p className="car-tow-section-descrp" style={{ width: "100%" }}>
                  Without a structured law firm marketing system in place, these
                  problems compound over time - costing your firm case
                  inquiries, revenue, and competitive position in your market.
                </p>
              </div>
            </div>
            <Row className="g-4">
              {notWorkingCards.map((card) => (
                <Col md={6} xl={4} key={card.title} className="d-flex">
                  <div className="law-problem-card">
                    <div className="law-problem-icon" aria-hidden="true">
                      {card.icon}
                    </div>
                    <div>
                      <h3>{card.title}</h3>
                      <p>{card.text}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
            <div style={{ marginTop: "32px", textAlign: "center" }}>
              <HashScrollLink
                href="#law-contact-form"
                className="buttons law-green-cta"
                offset={120}
              >
                Get a Free Audit
                <ArrowIcon />
              </HashScrollLink>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CASE STUDY ─── */}
      <section className="car-tow-section car-tow-section-alt">
        <div className="car-tow-container">
          <Row className="gy-4 align-items-center">
            <Col lg={7}>
              <div className="car-tow-case-copy">
                <p className="car-tow-eyebrow">Example Growth Scenario</p>
                <h2>
                  What a Focused Law Firm Marketing System Can Realistically
                  Improve.
                </h2>
                <h3 className="car-tow-sub-heading">
                  The Right Local SEO Setup Improves Both Case Inquiry Volume
                  and the Quality of Consultations over Time.
                </h3>
                <p>
                  Consider a mid-size law firm practicing personal injury and
                  family law in a competitive metro market. The firm had an
                  active Google Business Profile but a weak website with no
                  targeted practice area pages, an inconsistent review strategy,
                  and NAP information that varied across directories. Most new
                  client inquiries were coming through referrals with no
                  reliable digital channel generating consistent volume.
                </p>
                <p>
                  After optimizing the Google Business Profile for the
                  firm&apos;s core practice areas, building targeted landing
                  pages for personal injury and family law searches, cleaning up
                  local citations, implementing a structured review generation
                  process, and improving the website&apos;s consultation
                  conversion flow - the firm began appearing more consistently
                  in Google Maps results for high-intent legal searches. The
                  result was not simply more traffic. It was more calls, more
                  consultation form submissions, and a more predictable monthly
                  flow of qualified case inquiries from prospective clients in
                  the areas that mattered most.
                </p>
              </div>
            </Col>
            <Col lg={5}>
              <div className="car-tow-case-visual">
                <img
                  src={imgs.img5}
                  alt="Law firm digital marketing campaign results and case inquiry growth"
                />
              </div>
            </Col>
          </Row>

          <div className="car-tow-metric-grid">
            {caseStudyStats.map((item) => (
              <article className="car-tow-metric-card" key={item.label}>
                <div className="car-tow-metric-label-row">
                  <div
                    className="car-tow-service-icon"
                    aria-hidden="true"
                    style={{ background: "var(--lawprimary)" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3>{item.label}</h3>
                    <p className="car-tow-metric-detail">{item.detail}</p>
                  </div>
                </div>
                <div className="car-tow-metric-numbers">
                  <div className="car-tow-metric-num car-tow-metric-num-before">
                    <span className="car-tow-metric-num-label">Before</span>
                    <strong>{item.before}</strong>
                  </div>
                  <div
                    className="car-tow-metric-num-arrow"
                    aria-hidden="true"
                    style={{ background: "var(--lawprimary)" }}
                  >
                    <FaArrowRight />
                  </div>
                  <div className="car-tow-metric-num car-tow-metric-num-after">
                    <span className="car-tow-metric-num-label">After</span>
                    <strong>{item.after}</strong>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "36px" }}>
            <HashScrollLink
              href="#law-contact-form"
              className="buttons"
              offset={120}
            >
              See What&apos;s Possible for Your Firm
              <ArrowIcon />
            </HashScrollLink>
          </div>
        </div>
      </section>

      {/* ─── SEO VS PAID ADS ─── */}
      <section className="car-tow-section">
        <div className="car-tow-container">
          <div className="car-tow-center-head">
            <div className="car-tow-center-head-content">
              <p className="car-tow-eyebrow">Strategy Comparison</p>
              <h2>SEO Vs Paid Ads for Law Firms</h2>
              <p className="car-tow-section-descrp">
                Legal marketing involves significant budget decisions.
                Understanding how SEO and{" "}
                <Link href="/services/google-ads" className="law-inline-link">
                  paid advertising
                </Link>{" "}
                differ - and how
                they work together - helps your firm make smarter, more
                confident investment choices.
              </p>
            </div>
          </div>

          <Row className="gy-4 align-items-center law-strategy-compare-layout">
            <Col lg={8}>
              <div className="car-tow-table-wrap">
                <table className="car-tow-table">
                  <thead>
                    <tr>
                      <th>Factor</th>
                      <th>Law Firm SEO</th>
                      <th>Paid Advertising (PPC)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {seoFactors.map((factor, i) => (
                      <tr key={i}>
                        <td
                          style={{ fontWeight: 600, color: "var(--secondary)" }}
                        >
                          {factor}
                        </td>
                        <td>{seoPoints[i]}</td>
                        <td>{adsPoints[i]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="law-compare-conclusion">
                The most effective strategy for most law firms is a{" "}
                <strong>strong local SEO and content foundation</strong>{" "}
                supported by targeted paid campaigns when specific short-term
                goals require faster visibility - particularly for new
                practice areas or competitive markets where organic rankings
                take longer to establish.
              </div>
              <div style={{ marginTop: "28px" }}>
                <HashScrollLink
                  href="#law-contact-form"
                  className="buttons"
                  offset={120}
                >
                  Get a Free Audit
                  <ArrowIcon />
                </HashScrollLink>
              </div>
            </Col>
            <Col lg={4} className="law-hidden-visual">
              <div
                className="car-tow-image-frame"
                style={{ minHeight: "460px" }}
              >
                <img
                  src={imgs.img6}
                  alt="Law firm marketing strategy comparison - SEO versus paid advertising for attorneys"
                />
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* ─── WHY ZONIC MEDIA (dark) ─── */}
      <section className="car-tow-section car-tow-section-dark">
        <div className="car-tow-container">
          <div className="car-tow-center-head">
            <div className="car-tow-center-head-content car-tow-center-head-content-light">
              <p className="car-tow-eyebrow">Why Work With Us</p>
              <h2>Why Law Firms Choose Zonic Media</h2>
              <p className="car-tow-section-descrp">
                There are many digital marketing agencies. Fewer of them build
                integrated law firm marketing services designed specifically
                around how legal clients search, compare, and make contact
                decisions. Our approach connects local SEO, content strategy,
                web design, reputation growth, and tracking into a single system
                focused on one outcome - more qualified case inquiries for
                your firm.
              </p>
            </div>
          </div>

          <div className="law-why-grid">
            <Row className="g-4">
              {whyCards.slice(0, 4).map((card) => (
                <Col md={6} xl={3} key={card.title}>
                  <article className="car-tow-service-card">
                    <div className="car-tow-service-icon">{card.icon}</div>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </article>
                </Col>
              ))}
            </Row>
            <div className="law-why-image-wrap">
              <img
                src={imgs.img7}
                alt="Zonic Media law firm digital marketing services team and strategy"
              />
            </div>
          </div>

          <div
            className="car-tow-final-cta law-cta-banner law-cta-banner-spacious"
            style={{
              marginTop: "48px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <p className="car-tow-eyebrow">Ready to Start?</p>
            <h2>Book a Free Law Firm Marketing Strategy Call</h2>
            <p>
              Let&apos;s review your firm&apos;s current online presence and
              identify exactly what your law firm marketing services strategy
              should prioritize. No pressure - just a focused conversation
              about your market and the specific opportunities your firm is
              currently missing.
            </p>
            <div
              className="car-tow-hero-actions car-tow-final-actions"
              style={{ marginTop: "20px" }}
            >
              <HashScrollLink
                href="#law-contact-form"
                className="buttons"
                offset={120}
              >
                Book a Free Call
                <ArrowIcon />
              </HashScrollLink>
              <a
                href={SITE_CONTACT.phoneHref}
                className="buttons car-tow-button-secondary"
              >
                Book a Free Call
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROCESS (interactive) ─── */}
      <section
        ref={processSectionRef}
        className="car-tow-section car-tow-process-section law-process-light-section"
      >
        <div className="car-tow-container">
          <div className="car-tow-center-head">
            <div className="car-tow-center-head-content">
              <p className="car-tow-eyebrow">How We Work</p>
              <h2>Our Proven Law Firm Marketing Process</h2>
              <p className="car-tow-section-descrp">
                Every law firm engagement follows a structured four-step process
                designed to build local visibility, improve website conversion,
                grow your firm&apos;s reputation, and generate consistent case
                inquiry growth over time.
              </p>
            </div>
          </div>

          <div
            className="car-tow-process-nav"
            role="tablist"
            aria-label="Law firm marketing process steps"
          >
            <div className="car-tow-process-line" aria-hidden="true">
              <motion.div
                className="car-tow-process-line-fill"
                initial={{ width: "0%" }}
                animate={lineControls}
              />
            </div>
            {processSteps.map((step, index) => (
              <button
                key={step.step}
                type="button"
                role="tab"
                aria-selected={highlightedUpTo === index}
                className={`car-tow-process-btn${highlightedUpTo >= index ? " is-active" : ""}`}
                onClick={() => {
                  cancelledRef.current = true;
                  lineControls.stop();
                  const pct = (index / (processSteps.length - 1)) * 100;
                  lineControls.start({
                    width: `${pct}%`,
                    transition: { duration: 0.5, ease: "easeOut" },
                  });
                  setHighlightedUpTo(index);
                }}
              >
                <div className="car-tow-process-btn-circle" aria-hidden="true">
                  <span className="car-tow-process-btn-num">{step.step}</span>
                  {step.icon}
                </div>
                <span className="car-tow-process-btn-label">{step.title}</span>
              </button>
            ))}
          </div>

          <div className="car-tow-process-detail" role="tabpanel">
            <div className="car-tow-process-detail-icon" aria-hidden="true">
              {processSteps[highlightedUpTo].icon}
            </div>
            <motion.div
              key={highlightedUpTo}
              className="car-tow-process-detail-body"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <span className="car-tow-process-detail-step">
                Step {processSteps[highlightedUpTo].step}
              </span>
              <h3>{processSteps[highlightedUpTo].title}</h3>
              <p>{processSteps[highlightedUpTo].text}</p>
            </motion.div>
          </div>

          <div style={{ textAlign: "center", marginTop: "36px" }}>
            <HashScrollLink
              href="#law-contact-form"
              className="buttons"
              offset={120}
            >
              Start With Step One - Free Audit
              <ArrowIcon />
            </HashScrollLink>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <div className="phila-sec-8 law-phila-section">
        <h2 className="phila-sec-8-heading">What Our Clients Say</h2>
        <div className="phila-test">
          <ClutchWidget
            widgetType="12"
            height="375"
            primaryColor="#edbf5f"
            reviews="448872,448007,448005,447416,446728,446721,446714,446262,441531,442062,445226,445524"
          />
        </div>
      </div>

      {/* ─── FAQ ─── */}
      <div className="phila-sec-9 law-phila-section">
        <div className="phila-center-head">
          <div className="phila-center-head-content-wrapper">
            <h2 className="phila-sec-heading">
              Frequently Asked Questions About Law Firm Marketing Services
            </h2>
          </div>
        </div>

        <div className="phila-sec-9-faq-wrapper">
          <GmbFaqs items={faqs} columns={2} />
        </div>

        <Script
          id="law-seo-faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "url": "https://www.zonicllc.com/services/industry/local-seo-for-law-firms",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
              })),
            }),
          }}
        />
      </div>

      {/* ─── FINAL CTA ─── */}
      <section className="car-tow-section car-tow-final-section">
        <div className="car-tow-container">
          <div className="car-tow-final-cta law-cta-banner law-cta-banner-spacious">
            <p className="car-tow-eyebrow">Start Growing Today</p>
            <h2>More Qualified Case Inquiries from Google and Maps.</h2>
            <p>
              Zonic Media builds law firm marketing services that help attorneys
              generate more qualified consultations through local SEO, Google
              Maps optimization, conversion-focused web design, and reputation
              growth. If your current visibility is not producing consistent
              case inquiries, the gap is measurable and fixable.
            </p>
            <div className="car-tow-hero-actions car-tow-final-actions">
              <HashScrollLink
                href="#law-contact-form"
                className="buttons"
                offset={120}
              >
                Free Audit
                <ArrowIcon />
              </HashScrollLink>
              <a
                href={SITE_CONTACT.phoneHref}
                className="buttons car-tow-button-secondary"
              >
                Book a Free Call
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT FORM ─── */}
      <div className="phila-sec-10 law-phila-section">
        <div className="phila-sec-10-inner">
          <div className="phila-sec-10-content">
            <h2 className="phila-sec-10-heading">
              Ready to Attract More Qualified Case Inquiries for Your Law Firm?
            </h2>
            <p className="phila-sec-10-descrp">
              Book a discovery call with Zonic Media. We help law firms generate
              more qualified consultations through local SEO, Google Maps
              optimization, practice area content, and law firm digital
              marketing services tailored to your specific practice areas and
              target market.
            </p>

            <div className="phila-sec-10-info-grid">
              <div className="phila-sec-10-info-card">
                <div className="phila-sec-10-info-head">
                  <div className="phila-sec-10-info-icon">
                    <MdOutlineLocationOn />
                  </div>
                  <h3>Our Office</h3>
                </div>
                <a href={SITE_CONTACT.mapHref} target="_blank" rel="noreferrer">
                  8 The Green, STE B Dover, Kent, DE 19901
                  <br />
                  United States
                </a>
              </div>
              <div className="phila-sec-10-info-card">
                <div className="phila-sec-10-info-head">
                  <div className="phila-sec-10-info-icon">
                    <FiPhoneCall />
                  </div>
                  <h3>Contact Us</h3>
                </div>
                <a href={SITE_CONTACT.emailHref}>contact@zonicllc.com</a>
                <a href={SITE_CONTACT.phoneHref}>(302) 726-9736</a>
              </div>
            </div>

            <div className="phila-sec-10-image-wrap">
              <Image
                src={imgs.contact}
                fill
                alt="Send mail illustration for contacting Zonic Media"
                className="phila-sec-10-image"
              />
            </div>
          </div>

          <div className="phila-sec-10-contact-form" id="law-contact-form">
            <LeadContactForm
              leadFormTitle={lawContactFormHead.leadFormTitle}
              leadCallText={lawContactFormHead.leadCallText}
              submitButtonText="Contact Us"
            />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

