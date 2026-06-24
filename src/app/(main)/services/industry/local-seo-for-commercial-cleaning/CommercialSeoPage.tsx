"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
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
import "@/app/style/commercialSeo.css";

import {
  FaMapMarkerAlt,
  FaGlobe,
  FaStar,
  FaChartLine,
  FaBullhorn,
  FaSearch,
  FaUsers,
  FaShieldAlt,
  FaExclamationTriangle,
  FaHandshake,
  FaRegClock,
  FaLaptopCode,
  FaArrowRight,
  FaMoneyBillWave,
  FaThumbsDown,
  FaHospital,
  FaIndustry,
  FaStore,
  FaHardHat,
  FaWrench,
  FaBuilding,
} from "react-icons/fa";
import {
  FaArrowTrendUp,
  FaRegCircleCheck,
  FaPhoneVolume,
  FaRankingStar,
  FaRoute,
  FaBroom,
  FaSprayCan,
} from "react-icons/fa6";
import { FiPhoneCall, FiArrowUpRight } from "react-icons/fi";
import { MdOutlineLocationOn, MdSchool } from "react-icons/md";

/* ─── IMAGE PATHS ─── */
const imgs = {
  hero: "/images/commercial-seo/ChatGPT Image May 12, 2026, 12_58_29 PM.png",
  img1: "/images/commercial-seo/ChatGPT Image May 12, 2026, 11_54_58 AM.png",
  img2: "/images/commercial-seo/ChatGPT Image May 12, 2026, 12_14_12 PM.png",
  img3: "/images/commercial-seo/ChatGPT Image May 12, 2026, 12_27_37 PM.png",
  img4: "/images/commercial-seo/ChatGPT Image May 12, 2026, 12_34_45 PM.png",
  img5: "/images/commercial-seo/ChatGPT Image May 12, 2026, 12_36_45 PM.png",
  img6: "/images/commercial-seo/ChatGPT Image May 12, 2026, 12_38_26 PM (2).png",
  img7: "/images/commercial-seo/ChatGPT Image May 12, 2026, 12_39_26 PM.png",
  img8: "/images/commercial-seo/ChatGPT Image May 12, 2026, 12_56_37 PM.png",
  img9: "/images/commercial-seo/ChatGPT Image May 12, 2026, 12_58_29 PM.png",
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
  "Commercial cleaning company near me",
  "Office cleaning services",
  "Janitorial company near me",
  "Best commercial cleaners in my city",
  "Building cleaning services",
  "Medical facility cleaning company",
  "Post-construction cleanup",
  "Floor cleaning and maintenance",
  "Commercial cleaning reviews",
  "Get janitorial service quotes",
];

const heroStats = [
  { label: "Local SEO Growth", stat: "300%" },
  { label: "Google Maps Ranking", stat: "4x" },
  { label: "More Cleaning Leads", stat: "2x" },
  { label: "Keyword Rankings", stat: "180+" },
];

const problemCards = [
  {
    icon: <FaMapMarkerAlt />,
    title: "Not Showing Up in Local Cleaning Searches",
    text: "When facility managers or property owners search for a commercial cleaning company in your area, your business is nowhere to be found. Competitors with stronger local SEO signals are capturing those contract inquiries before your phone ever rings.",
  },
  {
    icon: <FaGlobe />,
    title: "Weak Google Business Profile",
    text: "An incomplete or unoptimized Google Business Profile suppresses your visibility in Google Maps and local search. Missing service categories, thin descriptions, low photo count, and no review strategy all hold your rankings back.",
  },
  {
    icon: <FaLaptopCode />,
    title: "No Location or Service-Specific Pages",
    text: "Generic websites without dedicated pages for each service area or cleaning type fail to rank in local searches. Without targeted content, Google has no reason to show your company to high-intent clients searching for specific services.",
  },
  {
    icon: <FaUsers />,
    title: "Competitors Dominating the Map Pack",
    text: "Other commercial cleaning companies in your market have stronger Google Business Profiles, more service area pages, better review strategies, and higher-ranking websites — and they are winning the contracts you should be generating.",
  },
  {
    icon: <FaStar />,
    title: "Low Review Volume and Weak Trust Signals",
    text: "Businesses searching for a cleaning company compare options quickly. Companies with fewer recent reviews, incomplete profiles, or no visible credentials lose contracts to competitors who appear more established and credible online.",
  },
  {
    icon: <FaChartLine />,
    title: "No Lead Tracking or Attribution System",
    text: "Without proper call tracking and form attribution, you cannot tell which marketing efforts are driving real cleaning contract inquiries — making every budget decision a guess rather than a data-driven investment.",
  },
];

const journeyChecklist = [
  "Appear first when businesses search for commercial cleaning",
  "Show up prominently in Google Maps across your service areas",
  "Build trust through recent, verified client reviews",
  "Display your services clearly for every location you serve",
  "Make requesting a cleaning quote fast and effortless",
  "Load instantly and look professional on any device",
];

const journeySupportCards = [
  {
    icon: <FaSearch />,
    title: "Decision makers research fast",
    text: "Most facility managers shortlist two or three cleaning companies before deciding — based on visibility, reviews, and how easy it is to request a quote.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Trust and professionalism close deals",
    text: "A complete Google Business Profile, recent reviews, and a professional website reduce hesitation and prompt faster contact from qualified prospects.",
  },
];

const systemCards = [
  {
    icon: <FaMapMarkerAlt />,
    title: "Google Business Profile Optimization",
    text: "We optimize every element of your GBP — service categories, descriptions, photos, Q&A, review responses, and posting cadence — to maximize local map visibility and drive more direct calls and quote requests.",
  },
  {
    icon: <FaSearch />,
    title: "Local Keyword Strategy",
    text: "We identify and target the specific search terms your potential clients use — from broad terms like 'commercial cleaning near me' to specific queries like 'janitorial services for office buildings' — and build your rankings around them.",
  },
  {
    icon: <FaGlobe />,
    title: "Location Page Optimization",
    text: "We build or improve dedicated location landing pages for every city or service area you serve, ensuring your cleaning company appears in local searches across your full geographic footprint.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Service Page SEO",
    text: "We create and optimize targeted service pages for each cleaning specialty — office cleaning, janitorial services, medical facility cleaning, floor maintenance, and more — so Google understands your full service offering.",
  },
  {
    icon: <FaStar />,
    title: "Review Growth Strategy",
    text: "We implement a systematic review generation process that steadily grows your Google rating and review count. More credible, recent reviews directly improve map rankings and give prospects the confidence to reach out.",
  },
  {
    icon: <FaBullhorn />,
    title: "Local Citation Building",
    text: "We build and clean up your business listings across key local directories — ensuring consistent NAP information everywhere your company appears online, which strengthens Google's trust in your local presence.",
  },
  {
    icon: <FaChartLine />,
    title: "On-Page SEO",
    text: "We optimize every page on your website for the right keywords, proper heading structure, metadata, internal linking, and conversion-focused layout — making your site easier for both Google and potential clients to understand.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Technical SEO",
    text: "We address site speed, mobile-friendliness, crawlability, structured data, and Core Web Vitals — ensuring Google can properly index your site and that every visitor gets a fast, reliable experience.",
  },
  {
    icon: <FaHandshake />,
    title: "Content Strategy",
    text: "We develop an SEO content strategy for your cleaning business — including blog content, FAQs, and industry-specific pages — that builds authority, answers client questions, and drives consistent organic traffic over time.",
  },
  {
    icon: <FaArrowTrendUp />,
    title: "Local Link Building",
    text: "We build relevant local backlinks from industry directories, associations, and community sources that strengthen your domain authority and help your cleaning company rank higher in competitive local markets.",
  },
];

const industries = [
  {
    icon: <FaBuilding />,
    title: "Office Cleaning Companies",
    text: "Rank higher when facility managers and office administrators search for regular commercial cleaning contractors in your market.",
  },
  {
    icon: <FaBroom />,
    title: "Janitorial Companies",
    text: "Attract more janitorial contracts from schools, government buildings, and corporate facilities actively searching for reliable ongoing service.",
  },
  {
    icon: <FaHospital />,
    title: "Medical Facility Cleaning",
    text: "Get found by healthcare administrators who need certified, compliant cleaning services for clinics, dental offices, and medical centers.",
  },
  {
    icon: <MdSchool />,
    title: "School and Daycare Cleaning",
    text: "Rank for school cleaning and childcare facility sanitation searches where local families and administrators prioritize safe, thorough cleaning.",
  },
  {
    icon: <FaIndustry />,
    title: "Industrial Cleaning",
    text: "Appear in searches from warehouse managers and plant operators looking for industrial-grade cleaning and maintenance services in your area.",
  },
  {
    icon: <FaStore />,
    title: "Retail Cleaning",
    text: "Attract retail property managers and store owners searching for regular cleaning services that maintain a professional, welcoming environment.",
  },
  {
    icon: <FaHardHat />,
    title: "Post-Construction Cleaning",
    text: "Capture high-intent searches from contractors and developers who need thorough post-construction cleanup before opening or occupancy.",
  },
  {
    icon: <FaWrench />,
    title: "Floor Cleaning and Maintenance",
    text: "Rank for floor cleaning, polishing, and restoration searches from building owners who need ongoing floor care across commercial properties.",
  },
];

const benefitPoints = [
  "More qualified cleaning contract leads every month",
  "Stronger Google Maps presence across all service areas",
  "Greater local authority in commercial cleaning searches",
  "Better website conversion from visitor to quote request",
  "Improved trust through consistent review growth",
  "Lower long-term cost per qualified cleaning lead",
];

const benefitCards = [
  {
    icon: <FaSprayCan />,
    title: "More Inbound Quote Requests",
    text: "Attract facility managers, property owners, and business operators who are actively searching for commercial cleaning services — not general web traffic unlikely to convert.",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Better Google Maps Visibility",
    text: "Appear in the local map pack when potential clients in your area search for cleaning services. Map visibility is where the majority of local cleaning contract decisions begin.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Stronger Local Authority",
    text: "Build credibility across Google, industry directories, and your website that establishes your cleaning company as the most visible and trustworthy option in your market.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Better Website Conversion",
    text: "Turn more of your existing organic traffic into actual quote requests by improving service page clarity, strengthening trust signals, and streamlining the contact experience.",
  },
  {
    icon: <FaStar />,
    title: "More Trust Through Reviews",
    text: "A steady flow of genuine, recent client reviews on Google directly improves your rankings and gives prospective cleaning clients the confidence they need to contact your company.",
  },
  {
    icon: <FaRegClock />,
    title: "Lower Long-Term Cost Per Lead",
    text: "Unlike paid advertising that stops generating leads the moment you pause spending, SEO builds lasting local visibility that compounds over time and steadily reduces your cost per inquiry.",
  },
];

const notWorkingCards = [
  {
    icon: <FaSearch />,
    title: "Competitors Win High-Intent Searches",
    text: "Other cleaning companies with stronger local SEO will capture the contract inquiries from businesses actively searching for cleaning services in your area — searches that should be reaching your company first.",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Paid Ads Without Organic Support Get Expensive",
    text: "Without a strong organic and local SEO foundation, you will pay for every click and see diminishing returns as ad costs rise in competitive cleaning markets — with nothing lasting to show for it.",
  },
  {
    icon: <FaGlobe />,
    title: "Website Traffic Does Not Become Quotes",
    text: "Without conversion-focused service pages and clear calls to action, visitors who do find your website will leave without requesting a quote and contact a competitor instead.",
  },
  {
    icon: <FaThumbsDown />,
    title: "No Review or Reputation Management System",
    text: "Without a proactive strategy for generating and managing reviews, your company stays weak in Google's local ranking signals and looks less credible than cleaning companies that have built strong review profiles.",
  },
  {
    icon: <FaExclamationTriangle />,
    title: "No Consistent Marketing Strategy",
    text: "Ad hoc or scattered marketing efforts produce inconsistent, unpredictable results. Without a structured local SEO system, growth depends on chance rather than a repeatable, measurable process.",
  },
  {
    icon: <FaChartLine />,
    title: "Leads Are Not Tracked or Attributed",
    text: "Without proper call and form tracking, you have no visibility into which marketing efforts are generating real cleaning contract inquiries — making every budget decision a guess instead of a data-driven choice.",
  },
];

const caseStudyStats = [
  {
    icon: <FaPhoneVolume />,
    label: "Google Business Profile calls",
    before: "12/mo",
    after: "38/mo",
    detail:
      "More direct inbound calls from facility managers and business owners searching for commercial cleaning services in the company's target areas.",
  },
  {
    icon: <FaRankingStar />,
    label: "Top-3 map pack rankings",
    before: "3 keywords",
    after: "14 keywords",
    detail:
      "Broader local map pack coverage across core commercial cleaning and janitorial search terms that drive high-intent contract inquiries.",
  },
  {
    icon: <FaRoute />,
    label: "Location and service pages indexed",
    before: "2 indexed",
    after: "11 indexed",
    detail:
      "Stronger organic presence across all service areas and cleaning specialties, improving relevance signals for both Google and prospective clients.",
  },
  {
    icon: <FaArrowRight />,
    label: "Inbound quote requests",
    before: "Unstable",
    after: "Consistent monthly flow",
    detail:
      "A steadier, more predictable stream of inbound quote requests from qualified commercial cleaning prospects in the company's service markets.",
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
  "Captures high-intent cleaning searches at no per-click cost",
  "Every improvement adds lasting value to your company's presence",
];

const adsPoints = [
  "Immediate visibility but stops the moment the budget stops",
  "Stays high or increases as competition rises in your market",
  "Generates clicks without building domain or local authority",
  "Can be poorly targeted — quality varies significantly by setup",
  "Visibility disappears completely when you pause spending",
];

const whyCards = [
  {
    icon: <FaSprayCan />,
    title: "We Focus on Cleaning Contract Leads",
    text: "Our commercial cleaning SEO services are measured by quote requests and contract inquiries — not impressions, clicks, or vanity metrics that do not translate into real business growth.",
  },
  {
    icon: <FaSearch />,
    title: "We Understand Janitorial Search Intent",
    text: "Businesses searching for commercial cleaning have specific, recurring needs. Our strategies are built around how real facility managers, property owners, and business operators search and make cleaning vendor decisions.",
  },
  {
    icon: <FaLaptopCode />,
    title: "We Build Conversion-Focused Cleaning Websites",
    text: "Our web design approach for cleaning companies focuses on communicating professionalism clearly, displaying services and service areas accessibly, and making it effortless for a prospect to request a quote.",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "We Improve Google Maps Visibility",
    text: "Local map rankings are where most commercial cleaning contract inquiries begin. Our strategies focus heavily on the Google Business Profile and local signals that move your company up in Maps results.",
  },
  {
    icon: <FaArrowTrendUp />,
    title: "We Connect SEO, Content, Reviews, and Tracking",
    text: "Our integrated approach ensures that local SEO, service area content, reputation growth, and lead tracking all work together as one coordinated system focused on generating consistent cleaning leads.",
  },
  {
    icon: <FaChartLine />,
    title: "We Provide Transparent Performance Reporting",
    text: "You will always know what your investment is producing. We deliver regular reporting on rankings, calls, form submissions, and lead quality so you can clearly see the ROI of your SEO program.",
  },
  {
    icon: <FaShieldAlt />,
    title: "We Understand Cleaning Industry Trust Factors",
    text: "Commercial cleaning clients are cautious — they are inviting vendors into their buildings. We incorporate trust signals, certifications, reviews, and professional presentation into every element of your digital presence.",
  },
  {
    icon: <FaHandshake />,
    title: "We Limit Cleaning Companies Per Market",
    text: "We work with a limited number of commercial cleaning companies per market to avoid conflicts of interest and ensure every client receives a focused, undivided local SEO strategy tailored to their specific competitive landscape.",
  },
];

const processSteps = [
  {
    step: "01",
    icon: <FaSearch />,
    title: "SEO Audit and Market Analysis",
    text: "We conduct a thorough review of your current online presence, local search performance, competitor positioning, Google Business Profile health, and website conversion gaps — identifying exactly where your cleaning company is losing contract inquiries and what needs to change first.",
  },
  {
    step: "02",
    icon: <FaChartLine />,
    title: "Strategy and Competitor Research",
    text: "We build a commercial cleaning SEO strategy specific to your services, service areas, and competitive landscape. This includes local keyword targeting, GBP optimization priorities, location page planning, and a structured approach to reputation and conversion improvement.",
  },
  {
    step: "03",
    icon: <FaLaptopCode />,
    title: "GBP, Website, and Content Optimization",
    text: "We implement technical and on-page improvements to your website, optimize your Google Business Profile, build or refine targeted service and location pages, strengthen local citation signals, and set up proper call and form tracking for accurate attribution.",
  },
  {
    step: "04",
    icon: <FaArrowTrendUp />,
    title: "Monthly Tracking and Continuous Growth",
    text: "We launch a systematic review generation process, monitor rankings and lead quality, and deliver monthly performance reporting. Every month we identify new opportunities and adjust the strategy to ensure your cleaning company's SEO keeps improving over time.",
  },
];

const faqs = [
  {
    question: "What is local SEO for commercial cleaning companies?",
    answer:
      "Local SEO for commercial cleaning companies refers to the set of digital strategies used to improve your business's visibility in local Google search results and Google Maps. This includes optimizing your Google Business Profile, building service and location-specific pages, growing your review count, cleaning up local citations, and improving your website's technical performance. The goal is to make your cleaning company appear prominently when facility managers, property owners, and business operators search for commercial cleaning services in your area.",
  },
  {
    question: "How can SEO help my cleaning company get more leads?",
    answer:
      "SEO helps your cleaning company appear in front of the right people at the right moment — when they are actively searching for cleaning services. By ranking your Google Business Profile and website for relevant local search terms, your company captures high-intent traffic from businesses that need cleaning services now. This produces more qualified inbound quote requests and calls from prospects who are already looking for what you offer, rather than interrupting people who are not.",
  },
  {
    question: "How long does commercial cleaning SEO take to produce results?",
    answer:
      "Most commercial cleaning companies begin to see measurable early improvements within 2 to 3 months, particularly from Google Business Profile optimization. Meaningful ranking gains in organic search and the local map pack typically develop between 4 and 6 months of consistent effort. The timeline depends on your current online presence, your market's competition level, and how aggressively you invest in content and local authority. SEO is a compounding strategy — the longer it runs, the stronger and more cost-effective it becomes.",
  },
  {
    question: "Do you optimize Google Business Profile for cleaning companies?",
    answer:
      "Yes. Google Business Profile optimization is one of our primary focus areas for commercial cleaning clients. We optimize every element of your GBP including service categories, business descriptions, photos, Q&A, posting strategy, and review response cadence. A well-optimized Google Business Profile is the single most direct lever for improving Google Maps visibility and generating more inbound calls and quote requests from local prospects.",
  },
  {
    question: "Can you help us rank in multiple service areas?",
    answer:
      "Yes. Many commercial cleaning companies serve multiple cities, neighborhoods, or counties. We build and optimize dedicated location pages for each service area you want to rank in, ensuring your cleaning company appears in local searches across your full geographic footprint. Combined with a strong Google Business Profile strategy, this approach expands your local visibility well beyond your immediate city and captures contract inquiries from a broader territory.",
  },
  {
    question: "Is SEO better than paid ads for cleaning companies?",
    answer:
      "SEO builds long-term local authority and compounds over time, making it the more sustainable investment for most commercial cleaning companies. Google Ads can generate faster short-term visibility and are useful for specific campaigns, but they become expensive in competitive cleaning markets and stop generating leads the moment you pause spending. The most effective approach for most cleaning companies is a strong local SEO foundation supported by strategic paid campaigns when specific short-term goals require faster visibility.",
  },
  {
    question: "Do you create content for cleaning service and location pages?",
    answer:
      "Yes. We develop high-quality, SEO-optimized content for service pages, location landing pages, and industry-specific cleaning pages as part of your overall strategy. This includes writing that naturally incorporates relevant keywords, communicates your services and service areas clearly, addresses common client questions, and is structured in a way that helps Google understand your business — without keyword stuffing or generic, templated content that fails to rank or convert.",
  },
];

const cseoContactFormHead = {
  leadFormTitle: "Ready to Grow Your Cleaning Business?",
  leadCallText: (
    <>
      Let&apos;s build a commercial cleaning SEO strategy that drives more
      qualified contract inquiries, stronger local visibility, and consistent
      lead growth.
      <br />{" "}
      <a href="tel:+13027269736" className="lead-call-link">
        Call Now: (302) 726-9736
      </a>
    </>
  ),
};

/* ─── COMPONENT ─── */
export default function CommercialSeoPage() {
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "gmb-reinstatement",
          sourcePage: pathname,
          pageUrl: window.location.href,
          fullName: data.fullName,
          email: SITE_CONTACT.email,
          contact: data.contact,
          businessName: data.businessName,
          message: `Business Name: ${data.businessName}. Message: ${data.message}`,
          services: ["Local SEO"],
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
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  };

  useEffect(() => {
    document.body.classList.add("cseo-navbar-active");
    return () => {
      document.body.classList.remove("cseo-navbar-active");
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
    <main className="cseo-page">

      {/* ─── HERO ─── */}
      <section
        className="car-tow-hero"
        style={{ backgroundImage: `url("${imgs.hero}")` }}
      >
        <div className="car-tow-hero-layer">
          <div className="car-tow-container">
            <Row>
              <Col lg={9} className="car-tow-hero-copy">
                <p className="car-tow-eyebrow">Commercial Cleaning SEO Service</p>
                <h1 className="cseo-hero-title">
                  Local SEO Services for Commercial Cleaning Companies
                </h1>
                <p className="car-tow-hero-body">
                  Zonic Media provides local SEO services built specifically for
                  commercial cleaning companies. We help janitorial and cleaning
                  businesses rank higher on Google Maps, generate more inbound
                  quote requests, and build a consistent pipeline of qualified
                  cleaning contracts through local search optimization, Google
                  Business Profile management, and conversion-focused digital
                  strategy.
                </p>
                <div className="car-tow-hero-actions">
                  <HashScrollLink
                    href="#cseo-contact-form"
                    className="buttons"
                    offset={120}
                  >
                    Get a Free SEO Audit
                    <ArrowIcon />
                  </HashScrollLink>
                  <HashScrollLink
                    href="#cseo-contact-form"
                    className="buttons car-tow-button-secondary"
                    offset={120}
                  >
                    Grow My Cleaning Business
                    <ArrowIcon />
                  </HashScrollLink>
                </div>
                <div className="car-tow-trust-grid">
                  {heroStats.map((item) => (
                    <div
                      className="car-tow-trust-card cseo-hero-stat-card"
                      key={item.label}
                    >
                      <strong>{item.stat}</strong>
                      <span className="cseo-hero-stat-label">{item.label}</span>
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <div className="car-tow-marquee" aria-label="Commercial cleaning search terms">
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

      {/* ─── PROBLEM SECTION ─── */}
      <section className="car-tow-section" id="cseo-problems">
        <div className="car-tow-container">
          <div className="car-tow-center-head">
            <div className="car-tow-center-head-content">
              <p className="car-tow-eyebrow">The Core Challenge</p>
              <h2>
                Why Commercial Cleaning Companies Struggle to Rank Locally
              </h2>
              <p className="car-tow-section-descrp">
                Demand for commercial cleaning services is constant. Businesses
                need reliable cleaning vendors every day. The challenge for most
                cleaning companies is not demand — it is a local visibility
                problem. They are not being found when it matters most, and when
                they are found, their digital presence does not inspire enough
                confidence to prompt a quote request.
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
          <div className="car-tow-final-cta cseo-cta-banner cseo-cta-banner-tight" style={{ marginTop: "40px", padding: "40px" }}>
            <p className="car-tow-eyebrow">Start With a Free Audit</p>
            <h2>Find Out Exactly Where Your Cleaning Company Is Losing Leads</h2>
            <p>
              Request a free commercial cleaning SEO audit and we will review
              your local rankings, Google Business Profile, website conversion
              gaps, and competitive positioning in your market.
            </p>
            <div className="car-tow-hero-actions car-tow-final-actions" style={{ marginTop: "20px" }}>
              <HashScrollLink
                href="#cseo-contact-form"
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
                <p className="car-tow-eyebrow">How Clients Choose Cleaners</p>
                <h2>How Businesses Actually Find and Hire a Cleaning Company Online</h2>
                <h3 className="car-tow-sub-heading">
                  Facility managers and business owners searching for commercial
                  cleaning do not browse. They shortlist, compare, and contact
                  the company that looks most credible and easy to reach.
                </h3>
                <p>
                  Businesses looking for commercial cleaning services are not
                  leisurely researching options. They have a cleaning need — a
                  new office lease, a contract renewal coming up, or a current
                  vendor who is underperforming. They search, scan the top two
                  or three results, check reviews and service listings, evaluate
                  professionalism, and make a contact decision within minutes.
                  The cleaning company that appears most visible, trustworthy,
                  and easy to reach consistently wins that inquiry.
                </p>
                <p>
                  Your entire online presence — from your Google Maps listing
                  and review count to your service pages and quote request flow —
                  must work together to build trust and prompt action in a very
                  short window. Local SEO for commercial cleaning businesses
                  needs to account for this compressed decision-making process.
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
                    href="#cseo-contact-form"
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
              <div className="cseo-journey-visual-stack">
                <div className="car-tow-image-frame cseo-journey-image-frame">
                  <img
                    src={imgs.img1}
                    alt="Commercial cleaning business getting more local leads through SEO strategy"
                  />
                </div>
                <div className="cseo-journey-support-grid">
                  {journeySupportCards.map((item) => (
                    <article key={item.title} className="cseo-journey-support-card">
                      <div className="cseo-journey-support-icon" aria-hidden="true">
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

      {/* ─── CORE SEO SERVICES (dark) ─── */}
      <section className="car-tow-section car-tow-section-dark">
        <div className="car-tow-container">
          <div className="car-tow-center-head">
            <div className="car-tow-center-head-content car-tow-center-head-content-light">
              <p className="car-tow-eyebrow">Our Services</p>
              <h2>Complete Local SEO Services for Commercial Cleaning</h2>
              <p className="car-tow-section-descrp">
                We build a full commercial cleaning SEO system that connects
                Google Business Profile optimization, local keyword strategy,
                location pages, service content, review growth, citation
                building, and technical SEO into one coordinated approach
                focused on generating consistent cleaning contract inquiries.
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
            className="car-tow-final-cta cseo-cta-banner cseo-cta-banner-spacious"
            style={{
              marginTop: "48px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <p className="car-tow-eyebrow">Ready to See the Full Strategy?</p>
            <h2>Book a Free Commercial Cleaning SEO Discovery Call</h2>
            <p>
              Let&apos;s walk through what your cleaning company needs to
              generate more qualified contract inquiries from local search. We
              will review your current visibility and outline the specific steps
              that will move the needle in your market.
            </p>
            <div className="car-tow-hero-actions car-tow-final-actions" style={{ marginTop: "20px" }}>
              <HashScrollLink
                href="#cseo-contact-form"
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

      {/* ─── IMAGE SHOWCASE ─── */}
      {false && <section className="car-tow-section cseo-showcase-section">
        <div className="car-tow-container">
          <div className="car-tow-center-head">
            <div className="car-tow-center-head-content">
              <p className="car-tow-eyebrow">Professional. Visible. Trusted.</p>
              <h2>Commercial Cleaning Companies That Win Locally Look Like This</h2>
              <p className="car-tow-section-descrp">
                When your SEO is working, your cleaning company appears where
                decision makers are searching — with a professional presence
                that immediately communicates reliability, expertise, and
                trustworthiness across every touchpoint.
              </p>
            </div>
          </div>
          <div className="cseo-showcase-bento">
            <div className="cseo-bento-item cseo-bento-wide">
              <img
                src={imgs.img2}
                alt="Professional commercial cleaning team delivering consistent, high-quality building services"
              />
            </div>
            <div className="cseo-bento-item">
              <img
                src={imgs.img3}
                alt="Commercial cleaning company optimizing Google Business Profile for local search visibility"
              />
            </div>
            <div className="cseo-bento-item">
              <img
                src={imgs.img4}
                alt="Janitorial team performing office cleaning services for a corporate client"
              />
            </div>
            <div className="cseo-bento-item cseo-bento-wide">
              <img
                src={imgs.img5}
                alt="Commercial cleaning business generating more local leads through SEO and Google Maps optimization"
              />
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "36px" }}>
            <HashScrollLink
              href="#cseo-contact-form"
              className="buttons"
              offset={120}
            >
              Improve My Local Rankings
              <ArrowIcon />
            </HashScrollLink>
          </div>
        </div>
      </section>}

      {/* ─── INDUSTRIES SERVED ─── */}
      <section className="car-tow-section car-tow-section-alt">
        <div className="car-tow-container">
          <div className="car-tow-center-head">
            <div className="car-tow-center-head-content">
              <p className="car-tow-eyebrow">Industries We Serve</p>
              <h2>Commercial Cleaning SEO for Every Cleaning Specialty</h2>
              <p className="car-tow-section-descrp">
                Whether you specialize in office cleaning, janitorial services,
                medical facility cleaning, post-construction cleanup, or floor
                maintenance — we build local SEO strategies tailored to your
                specific cleaning niche and the clients most likely to hire you.
              </p>
            </div>
          </div>
          <Row className="g-4">
            {industries.slice(0, 6).map((item) => (
              <Col lg={4} md={6} key={item.title} className="d-flex">
                <article className="cseo-industry-card">
                  <div className="cseo-industry-icon" aria-hidden="true">
                    {item.icon}
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* ─── INLINE AUDIT FORM ─── */}
      <section className="car-tow-section cseo-inline-form-section">
        <div className="car-tow-container">
          <div className="cseo-inline-form-banner">
            <div className="cseo-inline-form-copy">
              <p className="car-tow-eyebrow">Quick Audit Request</p>
              <h2>Start your free commercial cleaning SEO review.</h2>
              <p>
                Share your business details below and we will review your local
                rankings, Google Business Profile, and conversion gaps at no cost.
              </p>
            </div>
            <form
              className="cseo-inline-audit-form"
              onSubmit={handleSubmit(onInlineAuditSubmit)}
              noValidate
            >
              <div className="cseo-inline-field">
                <input
                  type="text"
                  placeholder="Full name"
                  aria-label="Full name"
                  aria-invalid={errors.fullName ? "true" : "false"}
                  {...register("fullName", {
                    required: "Full name is required.",
                    minLength: { value: 2, message: "Full name must be at least 2 characters." },
                    maxLength: { value: 100, message: "Full name must be at most 100 characters." },
                  })}
                />
                {errors.fullName && (
                  <p className="text-danger mt-2 mb-0">{errors.fullName.message}</p>
                )}
              </div>
              <div className="cseo-inline-field">
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
                      message: "Phone number must contain only digits (7 to 15).",
                    },
                  })}
                />
                {errors.contact && (
                  <p className="text-danger mt-2 mb-0">{errors.contact.message}</p>
                )}
              </div>
              <div className="cseo-inline-field">
                <input
                  type="text"
                  placeholder="Business name"
                  aria-label="Business name"
                  aria-invalid={errors.businessName ? "true" : "false"}
                  {...register("businessName", {
                    required: "Business name is required.",
                    minLength: { value: 2, message: "Business name must be at least 2 characters." },
                    maxLength: { value: 100, message: "Business name must be at most 100 characters." },
                  })}
                />
                {errors.businessName && (
                  <p className="text-danger mt-2 mb-0">{errors.businessName.message}</p>
                )}
              </div>
              <div className="cseo-inline-field">
                <textarea
                  placeholder="Your message"
                  aria-label="Your message"
                  rows={1}
                  aria-invalid={errors.message ? "true" : "false"}
                  {...register("message", {
                    required: "Message is required.",
                    minLength: { value: 5, message: "Message must be at least 5 characters." },
                    maxLength: { value: 1800, message: "Message must be at most 1800 characters." },
                  })}
                />
                {errors.message && (
                  <p className="text-danger mt-2 mb-0">{errors.message.message}</p>
                )}
              </div>
              <div className="cseo-inline-audit-form-recaptcha">
                <RecaptchaCheckbox
                  action={RECAPTCHA_ACTION}
                  onExecutorReady={(executor) => {
                    recaptchaExecutorRef.current = executor;
                  }}
                  onSmsConsentChange={setSmsConsent}
                />
              </div>
              {submitError && (
                <p className="text-danger text-center mb-0 cseo-inline-audit-error">
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

      {/* ─── BENEFITS ─── */}
      <section className="car-tow-section cseo-benefits-section">
        <div className="car-tow-container">
          <Row className="gy-4 align-items-start">
            <Col lg={6}>
              <div className="car-tow-image-frame">
                <img
                  src={imgs.img6}
                  alt="Commercial cleaning company achieving consistent local lead growth through SEO"
                />
              </div>
            </Col>
            <Col lg={6}>
              <div className="car-tow-split-copy">
                <p className="car-tow-eyebrow">After Choosing Zonic Media</p>
                <h2>What a Focused Commercial Cleaning SEO Strategy Produces</h2>
                <h3 className="car-tow-sub-heading">
                  When local SEO is executed correctly for commercial cleaning
                  businesses, the impact goes well beyond more website traffic —
                  it creates a sustainable lead engine.
                </h3>
                <p>
                  Cleaning companies working with a structured local SEO system
                  see improvements across every stage of the client acquisition
                  process: more visibility in local search and Google Maps,
                  stronger first impressions from more recent reviews, improved
                  quote conversion from better website structure, and clearer
                  attribution of which marketing efforts are generating real
                  contract inquiries.
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
                    href="#cseo-contact-form"
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

      {/* ─── NOT WORKING (reddish) ─── */}
      <section className="car-tow-section cseo-notworking-section">
        <div className="car-tow-container">
          <div className="car-tow-center-head">
            <div className="car-tow-center-head-content">
              <p className="car-tow-eyebrow">Without a Strategy</p>
              <h2>What Happens Without a Commercial Cleaning SEO System</h2>
              <p className="car-tow-section-descrp">
                Without a structured local SEO program in place, these problems
                compound over time — costing your cleaning company contract
                inquiries, revenue, and competitive position in your local market.
              </p>
            </div>
          </div>
          <Row className="g-4">
            {notWorkingCards.map((card) => (
              <Col md={6} xl={4} key={card.title} className="d-flex">
                <div className="cseo-problem-card">
                  <div className="cseo-problem-icon" aria-hidden="true">
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
          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <HashScrollLink
              href="#cseo-contact-form"
              className="buttons"
              offset={120}
            >
              Get a Free SEO Audit
              <ArrowIcon />
            </HashScrollLink>
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
                  What a focused commercial cleaning SEO system can realistically improve.
                </h2>
                <h3 className="car-tow-sub-heading">
                  The right local SEO setup improves both inquiry volume and
                  the quality of cleaning contract leads over time.
                </h3>
                <p>
                  Consider a commercial cleaning company serving offices, retail
                  spaces, and medical facilities in a mid-size metro area. The
                  company had an active Google Business Profile but limited
                  website content, no dedicated location pages, inconsistent
                  directory listings, and a review strategy that was entirely
                  reactive. Most new contracts came through word of mouth with
                  no reliable digital channel generating consistent inquiry
                  volume.
                </p>
                <p>
                  After optimizing the Google Business Profile for the
                  company&apos;s core cleaning categories, building dedicated
                  service and location pages, cleaning up local citation
                  inconsistencies, implementing a structured review generation
                  process, and improving the website&apos;s quote request flow —
                  the company began appearing consistently in Google Maps results
                  for high-intent commercial cleaning searches. The outcome was
                  not simply more website traffic. It was more calls, more quote
                  form submissions, and a more predictable monthly flow of
                  qualified contract inquiries from businesses actively searching
                  for cleaning services in their area.
                </p>
              </div>
            </Col>
            <Col lg={5}>
              <div className="car-tow-case-visual">
                <img
                  src={imgs.img7}
                  alt="Commercial cleaning SEO results showing improved Google Maps visibility and lead growth"
                />
              </div>
            </Col>
          </Row>

          <div className="car-tow-metric-grid">
            {caseStudyStats.map((item) => (
              <article className="car-tow-metric-card" key={item.label}>
                <div className="car-tow-metric-label-row">
                  <div className="car-tow-service-icon" aria-hidden="true">
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
                  <div className="car-tow-metric-num-arrow" aria-hidden="true">
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
              href="#cseo-contact-form"
              className="buttons"
              offset={120}
            >
              See What&apos;s Possible for Your Cleaning Business
              <ArrowIcon />
            </HashScrollLink>
          </div>
        </div>
      </section>

      {/* ─── WHY ZONIC MEDIA (dark) ─── */}
      <section className="car-tow-section">
        <div className="car-tow-container">
          <Row className="gy-4 align-items-start">
            <Col lg={6}>
              <div className="car-tow-image-frame cseo-growth-visual-frame">
                <img
                  src={imgs.img3}
                  alt="Commercial cleaning company presenting a polished brand presence and professional service image"
                />
              </div>
            </Col>
            <Col lg={6}>
              <div className="car-tow-split-copy">
                <p className="car-tow-eyebrow">Professional Presence</p>
                <h2>Visibility works better when your cleaning company also looks credible.</h2>
                <h3 className="car-tow-sub-heading">
                  Strong local rankings get you seen, but professional brand
                  presentation helps turn that visibility into real commercial
                  quote requests.
                </h3>
                <p>
                  Decision makers looking for a commercial cleaning company do
                  not judge search results on rankings alone. They also evaluate
                  whether your business looks organized, trustworthy, and built
                  for serious commercial work. That impression influences who
                  gets shortlisted and who gets ignored.
                </p>
                <p>
                  A polished website, clear service positioning, strong visual
                  presentation, and confident local messaging all reinforce the
                  work your SEO is doing. When those pieces align, your company
                  feels more established before a prospect ever calls or fills
                  out a form.
                </p>
                <div>
                  <HashScrollLink
                    href="#cseo-contact-form"
                    className="buttons"
                    offset={120}
                  >
                    Build My Local Presence
                    <ArrowIcon />
                  </HashScrollLink>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section className="car-tow-section car-tow-section-dark">
        <div className="car-tow-container">
          <div className="car-tow-center-head">
            <div className="car-tow-center-head-content car-tow-center-head-content-light">
              <p className="car-tow-eyebrow">Why Work With Us</p>
              <h2>Why Commercial Cleaning Companies Choose Zonic Media</h2>
              <p className="car-tow-section-descrp">
                There are many digital marketing agencies. Fewer of them build
                integrated local SEO systems designed specifically around how
                commercial cleaning clients search, compare, and make vendor
                decisions. Our approach connects local SEO, content strategy,
                reputation growth, and lead tracking into a single system
                focused on one outcome — more qualified cleaning contract
                inquiries for your business.
              </p>
            </div>
          </div>

          <div className="cseo-why-grid">
            <Row className="g-4">
              {whyCards.slice(0, 3).map((card) => (
                <Col md={6} lg={4} key={card.title}>
                  <article className="car-tow-service-card">
                    <div className="car-tow-service-icon">{card.icon}</div>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </article>
                </Col>
              ))}
            </Row>
            <Row className="g-4">
              {whyCards.slice(3, 6).map((card) => (
                <Col md={6} lg={4} key={card.title}>
                  <article className="car-tow-service-card">
                    <div className="car-tow-service-icon">{card.icon}</div>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </article>
                </Col>
              ))}
            </Row>
          </div>

          <div
            className="car-tow-final-cta cseo-cta-banner cseo-cta-banner-spacious"
            style={{
              marginTop: "48px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <p className="car-tow-eyebrow">Ready to Start?</p>
            <h2>Book a Free Commercial Cleaning SEO Strategy Call</h2>
            <p>
              Let&apos;s review your cleaning company&apos;s current online
              presence and identify exactly what your SEO strategy should
              prioritize. No pressure — just a focused conversation about your
              market and the specific opportunities your business is currently
              missing.
            </p>
            <div className="car-tow-hero-actions car-tow-final-actions" style={{ marginTop: "20px" }}>
              <HashScrollLink
                href="#cseo-contact-form"
                className="buttons"
                offset={120}
              >
                Book a Free Strategy Call
                <ArrowIcon />
              </HashScrollLink>
              <a href={SITE_CONTACT.phoneHref} className="buttons car-tow-button-secondary">
                Call Us Now
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROCESS (interactive) ─── */}
      <section
        ref={processSectionRef}
        className="car-tow-section car-tow-process-section cseo-process-light-section"
      >
        <div className="car-tow-container">
          <div className="car-tow-center-head">
            <div className="car-tow-center-head-content">
              <p className="car-tow-eyebrow">How We Work</p>
              <h2>Our Commercial Cleaning SEO Process</h2>
              <p className="car-tow-section-descrp">
                Every commercial cleaning SEO engagement follows a structured
                four-step process designed to build local visibility, improve
                website conversion, grow your company&apos;s reputation, and
                generate consistent cleaning contract inquiry growth over time.
              </p>
            </div>
          </div>

          <div
            className="car-tow-process-nav"
            role="tablist"
            aria-label="Commercial cleaning SEO process steps"
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
              href="#cseo-contact-form"
              className="buttons"
              offset={120}
            >
              Start With Step One — Free Audit
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
              <h2>SEO vs Paid Ads for Commercial Cleaning Companies</h2>
              <p className="car-tow-section-descrp">
                Marketing budget decisions matter for every cleaning business.
                Understanding how local SEO and paid advertising differ — and
                how they work together — helps you make smarter, more confident
                investment choices for your company.
              </p>
            </div>
          </div>

          <Row className="gy-4 align-items-center cseo-strategy-compare-layout">
            <Col lg={12}>
              <div className="car-tow-table-wrap">
                <table className="car-tow-table">
                  <thead>
                    <tr>
                      <th>Factor</th>
                      <th>Cleaning Company SEO</th>
                      <th>Paid Advertising (PPC)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {seoFactors.map((factor, i) => (
                      <tr key={i}>
                        <td style={{ fontWeight: 600, color: "var(--secondary)" }}>
                          {factor}
                        </td>
                        <td>{seoPoints[i]}</td>
                        <td>{adsPoints[i]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="cseo-compare-conclusion">
                The most effective strategy for most commercial cleaning
                companies is a{" "}
                <strong>strong local SEO and content foundation</strong>{" "}
                supported by targeted paid campaigns when specific short-term
                goals require faster visibility — particularly when entering new
                service areas or competitive markets where organic rankings take
                longer to establish.
              </div>
              <div style={{ marginTop: "28px" }}>
                <HashScrollLink
                  href="#cseo-contact-form"
                  className="buttons"
                  offset={120}
                >
                  Get a Free SEO Audit
                  <ArrowIcon />
                </HashScrollLink>
              </div>
            </Col>
            {false && <Col lg={4} className="cseo-hidden-visual">
              <div className="car-tow-image-frame" style={{ minHeight: "460px" }}>
                <img
                  src={imgs.img8}
                  alt="Commercial cleaning marketing strategy comparison — SEO versus paid advertising"
                />
              </div>
            </Col>}
          </Row>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="car-tow-section car-tow-final-section">
        <div className="car-tow-container">
          <div className="car-tow-final-cta cseo-cta-banner cseo-cta-banner-spacious">
            <p className="car-tow-eyebrow">Start Growing Today</p>
            <h2>More qualified cleaning contract leads from Google and Maps.</h2>
            <p>
              Zonic Media builds local SEO systems that help commercial cleaning
              companies generate more qualified contract inquiries through Google
              Business Profile optimization, local search rankings, and
              conversion-focused digital strategy. If your current visibility is
              not producing consistent cleaning leads, the gap is measurable and
              fixable.
            </p>
            <div className="car-tow-hero-actions car-tow-final-actions">
              <HashScrollLink
                href="#cseo-contact-form"
                className="buttons"
                offset={120}
              >
                Free SEO Audit
                <ArrowIcon />
              </HashScrollLink>
              <a href={SITE_CONTACT.phoneHref} className="buttons car-tow-button-secondary">
                Book a Strategy Call
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <div className="phila-sec-8 cseo-phila-section">
        <h2 className="phila-sec-8-heading">What Our Clients Say</h2>
        <div className="phila-test">
          <ClutchWidget
            widgetType="12"
            height="375"
            primaryColor="#04398f"
            reviews="448872,448007,448005,448004,447635,447416,447409,446728,446721,446262,445981,446714,446714,446714"
          />
        </div>
      </div>

      {/* ─── FAQ ─── */}
      <div className="phila-sec-9 cseo-phila-section">
        <div className="phila-center-head">
          <div className="phila-center-head-content-wrapper">
            <h2 className="phila-sec-heading">
              Frequently Asked Questions About Commercial Cleaning SEO
            </h2>
          </div>
        </div>

        <div className="phila-sec-9-faq-wrapper">
          <GmbFaqs items={faqs} columns={2} />
        </div>

        <Script
          id="cseo-faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "url": "https://zonicllc.com/services/industry/local-seo-for-commercial-cleaning",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
              })),
            }),
          }}
        />
      </div>

      {/* ─── CONTACT FORM ─── */}
      <div className="phila-sec-10 cseo-phila-section">
        <div className="phila-sec-10-inner">
          <div className="phila-sec-10-content">
            <h2 className="phila-sec-10-heading">
              Ready to Attract More Cleaning Contract Leads for Your Business?
            </h2>
            <p className="phila-sec-10-descrp">
              Book a discovery call with Zonic Media. We help commercial
              cleaning companies generate more qualified contract inquiries
              through local SEO, Google Maps optimization, service and location
              page strategy, and cleaning business digital marketing tailored to
              your specific services and target market.
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
                alt="Zonic Media commercial cleaning SEO services consultation and contact"
                className="phila-sec-10-image"
              />
            </div>
          </div>

          <div className="phila-sec-10-contact-form" id="cseo-contact-form">
            <LeadContactForm
              leadFormTitle={cseoContactFormHead.leadFormTitle}
              leadCallText={cseoContactFormHead.leadCallText}
              submitButtonText="Contact Us"
            />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
