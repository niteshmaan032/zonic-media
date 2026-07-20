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
import "@/app/style/residentialSeo.css";

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
  FaHome,
  FaKey,
  FaLeaf,
  FaWrench,
  FaCalendarCheck,
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
import { MdOutlineLocationOn } from "react-icons/md";

/* ─── IMAGE PATHS ─── */
const imgs = {
  hero: "/images/residential-seo/ChatGPT Image May 13, 2026, 05_16_09 PM.png",
  img1: "/images/residential-seo/ChatGPT Image May 13, 2026, 05_07_41 PM.png",
  img2: "/images/residential-seo/ChatGPT Image May 13, 2026, 05_10_27 PM.png",
  img3: "/images/residential-seo/ChatGPT Image May 13, 2026, 05_12_21 PM.png",
  img4: "/images/residential-seo/ChatGPT Image May 13, 2026, 04_58_29 PM.png",
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
  "House cleaning near me",
  "Maid service near me",
  "Deep cleaning services",
  "Recurring home cleaning",
  "Residential cleaning company",
  "Best house cleaners in my area",
  "Move in move out cleaning",
  "Weekly cleaning service",
  "Apartment cleaning near me",
  "Eco-friendly home cleaning service",
];

const heroStats = [
  { label: "Local SEO Growth", stat: "280%" },
  { label: "Google Maps Ranking", stat: "3x" },
  { label: "More Booking Requests", stat: "2x" },
  { label: "Keyword Rankings", stat: "150+" },
];

const problemCards = [
  {
    icon: <FaMapMarkerAlt />,
    title: "Not Appearing in Local Cleaning Searches",
    text: "When homeowners type 'house cleaning near me' or 'maid service in [your city],' your business does not appear. Competitors with stronger local SEO signals are capturing those booking inquiries before a potential client ever encounters your name.",
  },
  {
    icon: <FaGlobe />,
    title: "Incomplete Google Business Profile",
    text: "An unoptimized Google Business Profile suppresses your Maps visibility. Missing service categories, thin descriptions, low photo count, and no active review strategy all hold your local rankings back and reduce homeowner confidence in your business.",
  },
  {
    icon: <FaLaptopCode />,
    title: "No Service or Location-Specific Pages",
    text: "A generic website without dedicated pages for each cleaning type or service area cannot rank in local searches. Without targeted content, Google has no clear signal to surface your cleaning company to high-intent homeowners searching nearby.",
  },
  {
    icon: <FaUsers />,
    title: "Local Competitors Outranking You",
    text: "Other cleaning companies in your market have stronger Google Business Profiles, more consistent reviews, better-structured websites, and higher-ranking service pages — and they are winning the bookings that should be going to your business.",
  },
  {
    icon: <FaStar />,
    title: "Too Few Reviews and Weak Trust Signals",
    text: "Homeowners are cautious about who they invite into their home. Cleaning companies with fewer recent reviews, incomplete profiles, or no visible trust signals consistently lose bookings to competitors who appear more credible and established online.",
  },
  {
    icon: <FaChartLine />,
    title: "No Consistent Booking Flow",
    text: "Without a reliable local SEO strategy, your booking volume depends on referrals, paid platforms, or seasonal swings — making revenue unpredictable and growth slow rather than structured, scalable, and consistently building month over month.",
  },
];

const journeyChecklist = [
  "Show up when homeowners search for cleaning in your area",
  "Appear prominently in Google Maps across your service neighborhoods",
  "Build trust through a steady stream of genuine, recent reviews",
  "Display your services, pricing signals, and availability clearly",
  "Make requesting a quote or booking fast and completely effortless",
  "Load instantly and look professional on any device homeowners use",
];

const journeySupportCards = [
  {
    icon: <FaSearch />,
    title: "Homeowners decide fast",
    text: "Most homeowners shortlist two or three cleaning companies based on Maps rankings, reviews, and how easy it is to get a quote or schedule — often within a few minutes of searching.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Trust and convenience close bookings",
    text: "A complete Google Business Profile, consistent five-star reviews, and a professional website reduce hesitation and make it easy for homeowners to choose your cleaning company with confidence.",
  },
];

const systemCards = [
  {
    icon: <FaMapMarkerAlt />,
    title: "Google Business Profile Optimization",
    text: "We optimize every element of your GBP — service categories, descriptions, photos, Q&A, review responses, and posting cadence — to maximize local map visibility and drive more direct calls and booking requests from homeowners in your area.",
  },
  {
    icon: <FaSearch />,
    title: "Local Keyword Strategy",
    text: "We identify and target the specific search terms homeowners use — from broad terms like 'house cleaning near me' to specific queries like 'deep cleaning service in [neighborhood]' — and build your rankings around terms that actually drive bookings.",
  },
  {
    icon: <FaGlobe />,
    title: "Location Page Optimization",
    text: "We build or improve dedicated landing pages for every neighborhood, suburb, or service area you cover, ensuring your cleaning company appears in local searches across your full geographic footprint — not just your immediate city.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Service Page SEO",
    text: "We create and optimize targeted service pages for each cleaning specialty — standard house cleaning, deep cleaning, move-out cleaning, recurring services, apartment cleaning, and more — so Google fully understands your offerings.",
  },
  {
    icon: <FaStar />,
    title: "Review Growth Strategy",
    text: "We implement a systematic review generation process that steadily grows your Google rating and review count. More credible, recent reviews directly improve map rankings and give homeowners the confidence they need to book your cleaning service.",
  },
  {
    icon: <FaBullhorn />,
    title: "Local Citation Building",
    text: "We build and clean up your business listings across key local directories — ensuring consistent name, address, and phone information everywhere your company appears online, which strengthens Google's trust in your local presence.",
  },
  {
    icon: <FaChartLine />,
    title: "On-Page SEO",
    text: "We optimize every page on your website for the right keywords, proper heading structure, metadata, internal linking, and a conversion-focused layout — making your site easier for both Google and potential clients to understand and navigate.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Technical SEO",
    text: "We address site speed, mobile-friendliness, crawlability, structured data, and Core Web Vitals — ensuring Google can properly index your site and that every homeowner gets a fast, reliable experience on any device they use.",
  },
  {
    icon: <FaHandshake />,
    title: "Content Strategy",
    text: "We develop an SEO content strategy for your cleaning business — including blog content, FAQs, and service-specific pages — that builds authority, answers homeowner questions, and drives consistent organic traffic to your site over time.",
  },
  {
    icon: <FaArrowTrendUp />,
    title: "Local Link Building",
    text: "We build relevant local backlinks from industry directories, community sources, and home services associations that strengthen your domain authority and help your cleaning company rank higher in competitive local residential cleaning markets.",
  },
];

const specialties = [
  {
    icon: <FaHome />,
    title: "Standard House Cleaning",
    text: "Rank higher when homeowners search for regular house cleaning services in your city, neighborhood, or zip code — capturing bookings from people ready to set up ongoing cleaning.",
  },
  {
    icon: <FaBroom />,
    title: "Deep Cleaning Services",
    text: "Appear when clients search for one-time deep cleaning, seasonal cleans, or thorough top-to-bottom home cleaning jobs that command higher ticket values.",
  },
  {
    icon: <FaKey />,
    title: "Move-In and Move-Out Cleaning",
    text: "Capture high-intent bookings from renters, homebuyers, landlords, and property managers who need reliable move cleaning services on a firm timeline.",
  },
  {
    icon: <FaCalendarCheck />,
    title: "Recurring Cleaning Clients",
    text: "Attract homeowners searching for dependable weekly or biweekly cleaning services — clients who become long-term recurring revenue for your cleaning business.",
  },
  {
    icon: <FaSprayCan />,
    title: "Apartment Cleaning",
    text: "Get found by apartment renters and property managers in urban and suburban markets actively looking for dependable, trustworthy cleaning assistance.",
  },
  {
    icon: <FaLeaf />,
    title: "Eco-Friendly Cleaning",
    text: "Rank for green and natural cleaning searches from homeowners who prioritize safe, non-toxic products — a growing and underserved segment in many local markets.",
  },
  {
    icon: <FaWrench />,
    title: "Post-Renovation Cleaning",
    text: "Appear in searches from contractors, homeowners, and property developers who need thorough post-construction cleanup before occupancy or sale.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Vacation Rental Cleaning",
    text: "Attract Airbnb hosts and short-term rental operators who need fast, reliable cleaning turnovers between guests — a high-frequency, recurring revenue opportunity.",
  },
];

const benefitPoints = [
  "More qualified booking requests from local homeowners each month",
  "Stronger Google Maps presence across your service neighborhoods",
  "Greater local authority in residential cleaning searches",
  "Better website conversion from visitor to booked cleaning job",
  "Improved trust through a consistent growth in genuine reviews",
  "Lower long-term cost per qualified residential cleaning inquiry",
];

const benefitCards = [
  {
    icon: <FaSprayCan />,
    title: "More Inbound Booking Requests",
    text: "Attract homeowners who are actively searching for a house cleaner or maid service — not broad web traffic unlikely to convert into actual cleaning bookings for your business.",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Better Google Maps Visibility",
    text: "Appear in the local map pack when homeowners in your area search for cleaning services. Map visibility is where the majority of residential cleaning booking decisions begin.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Stronger Local Authority",
    text: "Build credibility across Google, local directories, and your website that establishes your cleaning company as the most visible and trustworthy option in your market.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Better Website Conversion",
    text: "Turn more of your existing organic traffic into actual booking requests by improving service page clarity, strengthening trust signals, and streamlining the contact experience.",
  },
  {
    icon: <FaStar />,
    title: "More Trust Through Reviews",
    text: "A steady flow of genuine, recent client reviews on Google directly improves your local rankings and gives homeowners the confidence they need to contact and book your cleaning company.",
  },
  {
    icon: <FaRegClock />,
    title: "Lower Long-Term Cost Per Lead",
    text: "Unlike paid platforms that charge for every lead, SEO builds lasting local visibility that compounds over time — steadily reducing your cost per booking and eliminating dependency on third-party lead marketplaces.",
  },
];

const notWorkingCards = [
  {
    icon: <FaSearch />,
    title: "Competitors Capture Your Best Searches",
    text: "Other cleaning companies with stronger local SEO rankings and more optimized Google Business Profiles will collect the high-intent homeowner bookings that should be reaching your business first.",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Lead Platforms Get More Expensive",
    text: "Relying on Thumbtack, Angi, or similar platforms means paying for shared, competitive leads that drain your marketing budget without building any lasting digital presence or brand authority for your business.",
  },
  {
    icon: <FaGlobe />,
    title: "Website Traffic Doesn't Convert to Bookings",
    text: "Without conversion-focused service pages, clear trust signals, and a smooth booking or contact flow, homeowners who find your site will leave without reaching out and book a competitor instead.",
  },
  {
    icon: <FaThumbsDown />,
    title: "No Review Strategy Means Slower Growth",
    text: "Without a proactive system for generating and managing reviews, your cleaning company stays weak in Google's local ranking signals and looks less credible than competitors who have built strong, recent review profiles.",
  },
  {
    icon: <FaExclamationTriangle />,
    title: "Referral-Only Growth Has a Ceiling",
    text: "Word-of-mouth is valuable but unpredictable. Without a structured local SEO strategy, your booking volume stays dependent on referrals rather than a reliable, scalable digital channel you actually control.",
  },
  {
    icon: <FaChartLine />,
    title: "No Recurring Client Pipeline",
    text: "Attracting new clients costs more than retaining existing ones. Without SEO-driven visibility and strong digital presence, building a consistent recurring cleaning client base that creates stable monthly revenue becomes significantly harder.",
  },
];

const caseStudyStats = [
  {
    icon: <FaPhoneVolume />,
    label: "Google Business Profile booking calls",
    before: "8/mo",
    after: "27/mo",
    detail:
      "More direct inbound calls from homeowners actively searching for house cleaning and maid services in the company's target service areas.",
  },
  {
    icon: <FaRankingStar />,
    label: "Top-3 map pack rankings",
    before: "2 keywords",
    after: "11 keywords",
    detail:
      "Broader local map pack coverage across core residential cleaning search terms that drive high-intent homeowner booking inquiries.",
  },
  {
    icon: <FaRoute />,
    label: "Service and location pages indexed",
    before: "1 indexed",
    after: "7 indexed",
    detail:
      "Stronger organic presence across all service types and neighborhoods, improving relevance signals for both Google and prospective residential clients.",
  },
  {
    icon: <FaArrowRight />,
    label: "Monthly booking form submissions",
    before: "Irregular",
    after: "Consistent monthly flow",
    detail:
      "A steadier, more predictable stream of inbound booking requests from qualified homeowners in the company's residential service neighborhoods.",
  },
];

const seoFactors = [
  "Lead ownership",
  "Cost over time",
  "Brand authority",
  "Lead exclusivity",
  "Long-term ROI",
];

const seoPoints = [
  "Clients contact you directly — you own the relationship and booking flow",
  "Decreases as rankings and organic traffic grow steadily over time",
  "Builds real local trust, credibility, and a recognizable cleaning brand",
  "Every inquiry goes only to your business — zero shared competition",
  "Every improvement compounds, adding lasting value to your local presence",
];

const platformPoints = [
  "Platforms own client relationships — you pay to rent access to leads",
  "Per-lead costs stay high regardless of your business performance",
  "Generic marketplace listings provide little differentiation from competitors",
  "Leads go to three to five cleaners at once, lowering your close rate",
  "Stop paying and your marketplace visibility disappears completely",
];

const whyCards = [
  {
    icon: <FaBroom />,
    title: "We Focus on Real Booking Growth",
    text: "Our residential cleaning SEO services are measured by booking inquiries and recurring client acquisition — not impressions, clicks, or traffic numbers that do not translate into actual cleaning jobs scheduled.",
  },
  {
    icon: <FaSearch />,
    title: "We Understand Homeowner Search Intent",
    text: "Homeowners searching for a cleaning service have specific needs and trust requirements before they commit. Our strategies are built around how real homeowners search, compare options, and decide which cleaning company to book.",
  },
  {
    icon: <FaLaptopCode />,
    title: "We Build Conversion-Focused Cleaning Websites",
    text: "Our web approach for residential cleaning companies focuses on communicating trustworthiness clearly, displaying services accessibly, and making it completely effortless for a homeowner to request a booking or reach your team.",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "We Improve Google Maps Visibility",
    text: "Local map rankings are where most residential cleaning bookings begin. Our strategies focus heavily on Google Business Profile optimization and the local signals that move your cleaning company higher in Maps results.",
  },
  {
    icon: <FaArrowTrendUp />,
    title: "We Connect SEO, Reviews, Content, and Tracking",
    text: "Our integrated approach ensures that local SEO, service area content, reputation growth, and booking attribution all work together as one coordinated system focused on growing your residential cleaning client base.",
  },
  {
    icon: <FaChartLine />,
    title: "We Provide Transparent Performance Reporting",
    text: "You will always know what your investment is producing. We deliver regular reporting on rankings, calls, form submissions, and lead quality so you can clearly see the return your SEO program is generating.",
  },
  {
    icon: <FaShieldAlt />,
    title: "We Understand Cleaning Business Trust Factors",
    text: "Homeowners are cautious about who they invite into their home. We incorporate trust signals, credentials, reviews, and professional presentation into every element of your digital presence to reduce booking hesitation.",
  },
  {
    icon: <FaHandshake />,
    title: "We Limit Cleaning Companies Per Market",
    text: "We work with a limited number of residential cleaning companies per market to avoid conflicts of interest and ensure every client receives a focused, undivided local SEO strategy tailored to their specific competitive landscape.",
  },
];

const processSteps = [
  {
    step: "01",
    icon: <FaSearch />,
    title: "SEO Audit and Market Analysis",
    text: "We conduct a thorough review of your current online presence, local search performance, competitor positioning, Google Business Profile health, and website conversion gaps — identifying exactly where your cleaning company is losing booking opportunities and what needs to change first.",
  },
  {
    step: "02",
    icon: <FaChartLine />,
    title: "Strategy and Keyword Research",
    text: "We build a residential cleaning SEO strategy specific to your service types, neighborhoods, and competitive landscape. This includes local keyword targeting, GBP optimization priorities, service and location page planning, and a structured approach to review growth and booking conversion improvement.",
  },
  {
    step: "03",
    icon: <FaLaptopCode />,
    title: "GBP, Website, and Content Optimization",
    text: "We implement technical and on-page improvements across your website, optimize your Google Business Profile, build or refine targeted service and location pages, strengthen local citation signals, and set up accurate call and form tracking for proper attribution.",
  },
  {
    step: "04",
    icon: <FaArrowTrendUp />,
    title: "Monthly Tracking and Continuous Growth",
    text: "We launch a systematic review generation process, monitor rankings and booking quality, and deliver monthly performance reporting. Every month we identify new opportunities and adjust the strategy to ensure your cleaning company's SEO keeps improving over time.",
  },
];

const faqs = [
  {
    question: "How can SEO help my residential cleaning business?",
    answer:
      "SEO helps your residential cleaning business appear in front of homeowners at the exact moment they are searching for a cleaning service. By improving your Google Business Profile ranking and your website's position in local search results, SEO connects your business with high-intent homeowners who are actively ready to book. This creates a more consistent and predictable flow of inbound booking inquiries — from people who need cleaning help now — rather than depending entirely on referrals or paid platforms for every new client.",
  },
  {
    question: "How long does SEO take for house cleaning companies?",
    answer:
      "Most residential cleaning companies begin to see early improvements — particularly from Google Business Profile optimization — within 2 to 3 months. Meaningful ranking gains in organic search and Google Maps typically develop between 4 and 6 months of consistent effort. The timeline depends on your current online presence, your market's competition level, and how aggressively you invest in content and local authority. Local SEO is a compounding strategy — the stronger it becomes, the more cost-effective your booking generation gets over time.",
  },
  {
    question: "What keywords are important for residential cleaning SEO?",
    answer:
      "The most valuable search terms for residential cleaning businesses are location-specific and service-specific. Key targets include 'house cleaning near me,' 'maid service near me,' 'deep cleaning services,' 'recurring cleaning services,' 'move in move out cleaning,' 'apartment cleaning,' 'home cleaning [city],' and 'residential cleaning company [neighborhood or ZIP code].' We research the specific keywords with the highest search volume and booking intent in your particular market and build your SEO strategy around those terms.",
  },
  {
    question: "Is Google Business Profile important for cleaning companies?",
    answer:
      "Yes — Google Business Profile is one of the most important tools for residential cleaning businesses. It controls how your company appears in Google Maps and local search results, which is where the majority of high-intent homeowner bookings begin. A well-optimized GBP with the right service categories, strong photos, consistent reviews, and regular updates significantly improves your local map visibility and makes it easier for homeowners to contact or book your cleaning company directly.",
  },
  {
    question: "Can SEO help me get more recurring cleaning clients?",
    answer:
      "Yes. Attracting recurring clients through SEO requires appearing for the right search terms — such as 'weekly house cleaning,' 'biweekly cleaning service,' and 'regular cleaning company near me' — and having a website that communicates reliability, trust, and easy scheduling. When your SEO targets recurring service intent specifically, the homeowners who find you are already looking for a long-term cleaning partner, not just a one-time job, which leads to higher-quality client relationships and more stable monthly revenue.",
  },
  {
    question: "Do maid services need local SEO?",
    answer:
      "Yes. Maid and housekeeping businesses operate in highly competitive local markets where most homeowners make booking decisions based on what appears first in local search results and Google Maps. Without strong local SEO, your maid service will consistently lose bookings to competitors who rank higher in local searches, have more optimized Google Business Profiles, and appear more credible online — even if your actual service quality is superior to theirs.",
  },
  {
    question: "What makes Zonic Media different from other SEO agencies?",
    answer:
      "Zonic Media builds residential cleaning SEO systems that are specifically designed around how homeowners search for and choose cleaning services — not generic SEO campaigns that treat a cleaning company like any other local business. Our approach integrates Google Business Profile optimization, local keyword targeting, service page content, review growth, and lead tracking into a single coordinated system. We measure our work by booking inquiries and recurring client growth, not vanity metrics that do not impact your actual revenue.",
  },
  {
    question: "Is SEO better than buying leads for cleaning services?",
    answer:
      "SEO builds a lasting local presence that generates bookings directly for your business — homeowners find you and contact you, giving you full ownership of the client relationship. Lead platforms like Thumbtack or Angi provide shared leads that go to multiple competing cleaners simultaneously, require ongoing per-lead payments, and build no lasting digital presence for your business. For most residential cleaning companies, local SEO provides stronger long-term ROI, higher-quality client relationships, and a more predictable path to growing a recurring client base than reliance on third-party lead marketplaces.",
  },
];

const rseoContactFormHead = {
  leadFormTitle: "Ready to Grow Your Residential Cleaning Business?",
  leadCallText: (
    <>
      Let&apos;s build a residential cleaning SEO strategy that drives more
      booking requests, stronger local visibility, and consistent growth in
      recurring clients.
      <br />{" "}
      <a href="tel:+13027269736" className="lead-call-link">
        Call Now: (302) 726-9736
      </a>
    </>
  ),
};

/* ─── COMPONENT ─── */
export default function ResidentialSeoPage() {
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
    document.body.classList.add("rseo-navbar-active");
    return () => {
      document.body.classList.remove("rseo-navbar-active");
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
    <main className="rseo-page">

      {/* ─── HERO ─── */}
      <section
        className="car-tow-hero"
        style={{ backgroundImage: `url("${imgs.hero}")` }}
      >
        <div className="car-tow-hero-layer">
          <div className="car-tow-container">
            <Row>
              <Col lg={9} className="car-tow-hero-copy">
                <p className="car-tow-eyebrow">Residential Cleaning SEO Service</p>
                <h1 className="rseo-hero-title">
                  Local SEO Services for Residential Cleaning Companies
                </h1>
                <p className="car-tow-hero-body">
                  Zonic Media provides{" "}
                  <Link
                    href="/services/local-seo-for-home-services"
                    className="rseo-inline-link"
                  >
                    local SEO services
                  </Link>{" "}
                  built specifically for house cleaning and maid service
                  businesses. We help{" "}
                  <Link
                    href="/services/cleaning-company-marketing-agency"
                    className="rseo-inline-link"
                  >
                    residential cleaning companies
                  </Link>{" "}
                  rank higher on Google Maps, generate more
                  booking requests from local homeowners, and build a consistent
                  flow of recurring clients through local search optimization,
                  Google Business Profile management, and conversion-focused
                  digital strategy.
                </p>
                <div className="car-tow-hero-actions">
                  <HashScrollLink
                    href="#rseo-contact-form"
                    className="buttons"
                    offset={120}
                  >
                    Get a Free Cleaning SEO Audit
                    <ArrowIcon />
                  </HashScrollLink>
                  <HashScrollLink
                    href="#rseo-contact-form"
                    className="buttons car-tow-button-secondary"
                    offset={120}
                  >
                    Grow My Residential Cleaning Business
                    <ArrowIcon />
                  </HashScrollLink>
                </div>
                <div className="car-tow-trust-grid">
                  {heroStats.map((item) => (
                    <div
                      className="car-tow-trust-card rseo-hero-stat-card"
                      key={item.label}
                    >
                      <strong>{item.stat}</strong>
                      <span className="rseo-hero-stat-label">{item.label}</span>
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <div className="car-tow-marquee" aria-label="Residential cleaning search terms">
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
      <section className="car-tow-section" id="rseo-problems">
        <div className="car-tow-container">
          <div className="car-tow-center-head">
            <div className="car-tow-center-head-content">
              <p className="car-tow-eyebrow">The Core Challenge</p>
              <h2>
                Why Residential Cleaning Companies Struggle to Rank Locally
              </h2>
              <p className="car-tow-section-descrp">
                Homeowners looking for a reliable cleaning service search
                locally every day. The problem most residential cleaning
                businesses face is not a lack of demand — it is a local
                visibility gap. When homeowners search for a cleaner in their
                area, too many quality cleaning companies simply do not show up,
                and when they do appear, their digital presence does not build
                enough confidence to prompt a booking.
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
          <div className="car-tow-final-cta rseo-cta-banner rseo-cta-banner-tight" style={{ marginTop: "40px", padding: "40px" }}>
            <p className="car-tow-eyebrow">Start With a Free Audit</p>
            <h2>Find Out Exactly Where Your Cleaning Business Is Losing Bookings</h2>
            <p>
              Request a free residential cleaning SEO audit and we will review
              your local rankings, Google Business Profile,{" "}
              <Link href="/services/web-design" className="rseo-inline-link">
                website conversion
              </Link>{" "}
              gaps, and competitive positioning in your service areas.
            </p>
            <div className="car-tow-hero-actions car-tow-final-actions" style={{ marginTop: "20px" }}>
              <HashScrollLink
                href="#rseo-contact-form"
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
                <p className="car-tow-eyebrow">How Homeowners Choose Cleaners</p>
                <h2>How Homeowners Find and Book a Residential Cleaning Company</h2>
                <h3 className="car-tow-sub-heading">
                  Homeowners searching for a cleaning service are not browsing
                  casually. They are ready to book, and they want to find a
                  cleaner they can trust quickly and easily.
                </h3>
                <p>
                  When a homeowner needs cleaning help, they typically open
                  Google, search for a local option, scan the top two or three
                  results, check reviews and service listings, and make a
                  booking or contact decision within a few minutes. They are
                  evaluating trust, convenience, and professionalism
                  simultaneously. The cleaning company that appears most
                  visible, well-reviewed, and easy to reach consistently earns
                  that booking.
                </p>
                <p>
                  Your entire online presence — from your Google Maps listing
                  and review count to your service pages and booking flow —
                  needs to work together to build confidence and prompt action
                  in a very compressed window. Local SEO for residential
                  cleaning businesses must account for how quickly homeowners
                  make decisions and how little room there is to make a second
                  impression.
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
                    href="#rseo-contact-form"
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
              <div className="rseo-journey-visual-stack">
                <div className="car-tow-image-frame rseo-journey-image-frame">
                  <img
                    src={imgs.img1}
                    alt="Residential cleaning business getting more local bookings through SEO strategy"
                  />
                </div>
                <div className="rseo-journey-support-grid">
                  {journeySupportCards.map((item) => (
                    <article key={item.title} className="rseo-journey-support-card">
                      <div className="rseo-journey-support-icon" aria-hidden="true">
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
              <h2>Complete Local SEO Services for Residential Cleaning</h2>
              <p className="car-tow-section-descrp">
                We build a full residential cleaning SEO system that connects
                <Link
                  href="/services/gmb-optimization"
                  className="rseo-inline-link"
                >
                  Google Business Profile optimization
                </Link>
                , local keyword strategy,
                service page content, review growth, citation building, and
                technical SEO into one coordinated approach focused on
                generating consistent booking requests from local homeowners.
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
            className="car-tow-final-cta rseo-cta-banner rseo-cta-banner-spacious"
            style={{
              marginTop: "48px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <p className="car-tow-eyebrow">Ready to See the Full Strategy?</p>
            <h2>Book a Free Residential Cleaning SEO Discovery Call</h2>
            <p>
              Let&apos;s walk through what your cleaning company needs to
              generate more qualified booking requests from local search. We
              will review your current visibility and outline the specific steps
              that will move the needle in your market.
            </p>
            <div className="car-tow-hero-actions car-tow-final-actions" style={{ marginTop: "20px" }}>
              <HashScrollLink
                href="#rseo-contact-form"
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

      {/* ─── SPECIALTIES ─── */}
      <section className="car-tow-section car-tow-section-alt">
        <div className="car-tow-container">
          <div className="car-tow-center-head">
            <div className="car-tow-center-head-content">
              <p className="car-tow-eyebrow">Cleaning Specialties We Support</p>
              <h2>Residential Cleaning SEO for Every Service Type</h2>
              <p className="car-tow-section-descrp">
                Whether you specialize in standard house cleaning, deep
                cleaning, move-out services, recurring schedules, or
                eco-friendly cleaning — we build local SEO strategies tailored
                to your specific cleaning niche and the homeowners most likely
                to book you.
              </p>
            </div>
          </div>
          <Row className="g-4">
            {specialties.slice(0, 6).map((item) => (
              <Col lg={4} md={6} key={item.title} className="d-flex">
                <article className="rseo-industry-card">
                  <div className="rseo-industry-icon" aria-hidden="true">
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
      <section className="car-tow-section rseo-inline-form-section">
        <div className="car-tow-container">
          <div className="rseo-inline-form-banner">
            <div className="rseo-inline-form-copy">
              <p className="car-tow-eyebrow">Quick Audit Request</p>
              <h2>Start your free residential cleaning SEO review.</h2>
              <p>
                Share your business details below and we will review your local
                rankings, Google Business Profile, and booking conversion gaps
                at no cost. We can also flag whether you need to{" "}
                <Link
                  href="/services/gmb-verification-help"
                  className="rseo-inline-link"
                >
                  verify your GBP
                </Link>{" "}
                or recover a{" "}
                <Link
                  href="/services/gmb-reinstatement-help"
                  className="rseo-inline-link"
                >
                  suspended Google Business Profile
                </Link>
                .
              </p>
            </div>
            <form
              className="rseo-inline-audit-form"
              onSubmit={handleSubmit(onInlineAuditSubmit)}
              noValidate
            >
              <div className="rseo-inline-field">
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
              <div className="rseo-inline-field">
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
              <div className="rseo-inline-field">
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
              <div className="rseo-inline-field">
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
              <div className="rseo-inline-audit-form-recaptcha">
                <RecaptchaCheckbox
                  action={RECAPTCHA_ACTION}
                  onExecutorReady={(executor) => {
                    recaptchaExecutorRef.current = executor;
                  }}
                  onSmsConsentChange={setSmsConsent}
                />
              </div>
              {submitError && (
                <p className="text-danger text-center mb-0 rseo-inline-audit-error">
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
      <section className="car-tow-section rseo-benefits-section">
        <div className="car-tow-container">
          <Row className="gy-4 align-items-start">
            <Col lg={6}>
              <div className="car-tow-image-frame">
                <img
                  src={imgs.img2}
                  alt="Residential cleaning company achieving consistent local booking growth through SEO"
                />
              </div>
            </Col>
            <Col lg={6}>
              <div className="car-tow-split-copy">
                <p className="car-tow-eyebrow">After Choosing Zonic Media</p>
                <h2>What a Focused Residential Cleaning SEO Strategy Produces</h2>
                <h3 className="car-tow-sub-heading">
                  When local SEO is executed correctly for residential cleaning
                  businesses, the impact goes well beyond more website traffic —
                  it creates a sustainable booking engine.
                </h3>
                <p>
                  Cleaning companies working with a structured local SEO system
                  see improvements across every stage of client acquisition:
                  more visibility in local search and Google Maps, stronger
                  first impressions from more recent reviews, better booking
                  conversion from improved website structure, and clearer
                  attribution of which marketing efforts are generating real
                  cleaning job inquiries.
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
                    href="#rseo-contact-form"
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

      {/* ─── NOT WORKING ─── */}
      <section className="car-tow-section rseo-notworking-section">
        <div className="car-tow-container">
          <div className="car-tow-center-head">
            <div className="car-tow-center-head-content">
              <p className="car-tow-eyebrow">Without a Strategy</p>
              <h2>What Happens Without a Residential Cleaning SEO System</h2>
              <p className="car-tow-section-descrp">
                Without a structured local SEO program in place, these problems
                compound over time — costing your cleaning company bookings,
                recurring clients, and competitive standing in your local market.
              </p>
            </div>
          </div>
          <Row className="g-4">
            {notWorkingCards.map((card) => (
              <Col md={6} xl={4} key={card.title} className="d-flex">
                <div className="rseo-problem-card">
                  <div className="rseo-problem-icon" aria-hidden="true">
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
              href="#rseo-contact-form"
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
                  What a focused residential cleaning SEO system can realistically improve.
                </h2>
                <h3 className="car-tow-sub-heading">
                  The right local SEO setup improves both booking volume and
                  the quality of residential cleaning clients over time.
                </h3>
                <p>
                  Consider a residential cleaning company serving homeowners
                  across three suburban neighborhoods in a mid-size city. The
                  business had an active Google Business Profile but no
                  dedicated service pages, outdated citation listings, and a
                  review strategy that was entirely reactive. Most new clients
                  came through referrals with no consistent digital channel
                  generating reliable booking inquiries each month.
                </p>
                <p>
                  After optimizing the Google Business Profile for the
                  company&apos;s core residential cleaning categories, building
                  service-specific landing pages for deep cleaning, recurring
                  cleaning, and move-out cleaning, cleaning up citation
                  inconsistencies across key directories, implementing a
                  structured review generation process, and improving the
                  website&apos;s booking request flow — the company began
                  appearing consistently in Google Maps results for high-intent
                  residential cleaning searches. The outcome was not simply
                  more website traffic. It was more calls, more booking form
                  submissions, and a measurable increase in recurring cleaning
                  clients who first discovered the business through local search.
                </p>
              </div>
            </Col>
            <Col lg={5}>
              <div className="car-tow-case-visual">
                <img
                  src={imgs.img4}
                  alt="Residential cleaning SEO results showing improved Google Maps visibility and booking growth"
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
              href="#rseo-contact-form"
              className="buttons"
              offset={120}
            >
              See What&apos;s Possible for Your Cleaning Business
              <ArrowIcon />
            </HashScrollLink>
          </div>
        </div>
      </section>

      {/* ─── CREDIBILITY / PROFESSIONAL PRESENCE ─── */}
      <section className="car-tow-section">
        <div className="car-tow-container">
          <Row className="gy-4 align-items-stretch">
            <Col lg={6}>
              <div className="car-tow-image-frame rseo-growth-visual-frame">
                <img
                  src={imgs.img3}
                  alt="Residential cleaning company presenting a trustworthy, professional brand presence online"
                />
              </div>
            </Col>
            <Col lg={6}>
              <div className="car-tow-split-copy">
                <p className="car-tow-eyebrow">Professional Presence</p>
                <h2>Visibility works better when your cleaning company also looks trustworthy.</h2>
                <h3 className="car-tow-sub-heading">
                  Strong local rankings help homeowners find you, but a
                  professional digital presence turns that visibility into
                  actual booked cleaning jobs.
                </h3>
                <p>
                  Homeowners inviting a cleaner into their home make an
                  emotional trust decision — not just a price comparison. Your
                  Google Business Profile, website design, review count, service
                  clarity, and booking experience all contribute to whether a
                  homeowner feels confident enough to reach out and schedule.
                </p>
                <p>
                  A polished website, clear service descriptions, strong visual
                  presentation, and consistent local messaging reinforce the
                  work your SEO is doing. When those elements align, your
                  cleaning company feels more established and trustworthy before
                  a prospect ever makes contact — which directly improves
                  booking conversion rates.
                </p>
                <div>
                  <HashScrollLink
                    href="#rseo-contact-form"
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

      {/* ─── WHY ZONIC MEDIA (dark) ─── */}
      <section className="car-tow-section car-tow-section-dark">
        <div className="car-tow-container">
          <div className="car-tow-center-head">
            <div className="car-tow-center-head-content car-tow-center-head-content-light">
              <p className="car-tow-eyebrow">Why Work With Us</p>
              <h2>Why Residential Cleaning Companies Choose Zonic Media</h2>
              <p className="car-tow-section-descrp">
                Many digital marketing agencies offer SEO. Fewer build
                integrated local SEO systems designed specifically around how
                homeowners search for, compare, and book residential cleaning
                services. Our approach connects local SEO, service content,
                review growth, and lead tracking into a single system focused
                on one outcome — more qualified booking requests and more
                recurring clients for your cleaning business.
              </p>
            </div>
          </div>

          <div className="rseo-why-grid">
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
            className="car-tow-final-cta rseo-cta-banner rseo-cta-banner-spacious"
            style={{
              marginTop: "48px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <p className="car-tow-eyebrow">Ready to Start?</p>
            <h2>Book a Free Residential Cleaning SEO Strategy Call</h2>
            <p>
              Let&apos;s review your cleaning company&apos;s current online
              presence and identify exactly what your SEO strategy should
              prioritize. No pressure — just a focused conversation about your
              market and the specific opportunities your business is currently
              missing.
            </p>
            <div className="car-tow-hero-actions car-tow-final-actions" style={{ marginTop: "20px" }}>
              <HashScrollLink
                href="#rseo-contact-form"
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
        className="car-tow-section car-tow-process-section rseo-process-light-section"
      >
        <div className="car-tow-container">
          <div className="car-tow-center-head">
            <div className="car-tow-center-head-content">
              <p className="car-tow-eyebrow">How We Work</p>
              <h2>Our Residential Cleaning SEO Process</h2>
              <p className="car-tow-section-descrp">
                Every residential cleaning SEO engagement follows a structured
                four-step process designed to build local visibility, improve
                website conversion, grow your company&apos;s reputation, and
                generate consistent cleaning booking growth over time.
              </p>
            </div>
          </div>

          <div
            className="car-tow-process-nav"
            role="tablist"
            aria-label="Residential cleaning SEO process steps"
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
              href="#rseo-contact-form"
              className="buttons"
              offset={120}
            >
              Start With Step One — Free Audit
              <ArrowIcon />
            </HashScrollLink>
          </div>
        </div>
      </section>

      {/* ─── SEO VS LEAD PLATFORMS ─── */}
      <section className="car-tow-section">
        <div className="car-tow-container">
          <div className="car-tow-center-head">
            <div className="car-tow-center-head-content">
              <p className="car-tow-eyebrow">Strategy Comparison</p>
              <h2>Local SEO vs Lead Platforms for Residential Cleaning Companies</h2>
              <p className="car-tow-section-descrp">
                Many cleaning companies rely on Thumbtack, Angi, or similar
                platforms for leads. Understanding how local SEO, lead
                platforms, and{" "}
                <Link href="/services/google-ads" className="rseo-inline-link">
                  Google Ads
                </Link>{" "}
                compare helps you make smarter, more confident
                marketing investment decisions for your cleaning business.
              </p>
            </div>
          </div>

          <Row className="gy-4 align-items-center rseo-strategy-compare-layout">
            <Col lg={12}>
              <div className="car-tow-table-wrap">
                <table className="car-tow-table">
                  <thead>
                    <tr>
                      <th>Factor</th>
                      <th>Local SEO for Cleaning</th>
                      <th>Lead Platforms (Thumbtack, Angi)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {seoFactors.map((factor, i) => (
                      <tr key={i}>
                        <td style={{ fontWeight: 600, color: "var(--secondary)" }}>
                          {factor}
                        </td>
                        <td>{seoPoints[i]}</td>
                        <td>{platformPoints[i]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="rseo-compare-conclusion">
                For most residential cleaning businesses, the strongest
                long-term strategy is a{" "}
                <strong>solid local SEO foundation</strong>{" "}
                supported by strong review management — giving you direct
                bookings, full client ownership, and a growing presence that
                compounds over time without ongoing per-lead costs.
              </div>
              <div style={{ marginTop: "28px" }}>
                <HashScrollLink
                  href="#rseo-contact-form"
                  className="buttons"
                  offset={120}
                >
                  Get a Free SEO Audit
                  <ArrowIcon />
                </HashScrollLink>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="car-tow-section car-tow-final-section">
        <div className="car-tow-container">
          <div className="car-tow-final-cta rseo-cta-banner rseo-cta-banner-spacious">
            <p className="car-tow-eyebrow">Start Growing Today</p>
            <h2>More residential cleaning bookings from Google and Maps.</h2>
            <p>
              Zonic Media builds local SEO systems that help house cleaning and
              maid service businesses generate more qualified booking requests
              through Google Business Profile optimization, local search
              rankings, and conversion-focused digital strategy. If your current
              visibility is not producing consistent cleaning leads, the gap is
              measurable and fixable.
            </p>
            <div className="car-tow-hero-actions car-tow-final-actions">
              <HashScrollLink
                href="#rseo-contact-form"
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
      <div className="phila-sec-8 rseo-phila-section">
        <h2 className="phila-sec-8-heading">What Our Clients Say</h2>
        <div className="phila-test">
          <ClutchWidget
            widgetType="12"
            height="375"
            primaryColor="#73a83e"
            reviews="448872,448007,448005,448004,447635,447416,447409,446728,446721,446262,445981,446714,446714,446714"
          />
        </div>
      </div>

      {/* ─── FAQ ─── */}
      <div className="phila-sec-9 rseo-phila-section">
        <div className="phila-center-head">
          <div className="phila-center-head-content-wrapper">
            <h2 className="phila-sec-heading">
              Frequently Asked Questions About Residential Cleaning SEO
            </h2>
          </div>
        </div>

        <div className="phila-sec-9-faq-wrapper">
          <GmbFaqs items={faqs} columns={2} />
        </div>

        <Script
          id="rseo-faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "url": "https://zonicllc.com/services/industry/local-seo-services-for-residential-cleaning",
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
      <div className="phila-sec-10 rseo-phila-section">
        <div className="phila-sec-10-inner">
          <div className="phila-sec-10-content">
            <h2 className="phila-sec-10-heading">
              Ready to Attract More Residential Cleaning Bookings for Your Business?
            </h2>
            <p className="phila-sec-10-descrp">
              Book a discovery call with Zonic Media. We help house cleaning
              and maid service businesses generate more qualified booking
              requests through local SEO, Google Maps optimization, service and
              location page strategy, and residential cleaning digital marketing
              tailored to your specific services and target neighborhoods.
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
                alt="Zonic Media residential cleaning SEO services consultation and contact"
                className="phila-sec-10-image"
              />
            </div>
          </div>

          <div className="phila-sec-10-contact-form" id="rseo-contact-form">
            <LeadContactForm
              leadFormTitle={rseoContactFormHead.leadFormTitle}
              leadCallText={rseoContactFormHead.leadCallText}
              submitButtonText="Contact Us"
            />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
