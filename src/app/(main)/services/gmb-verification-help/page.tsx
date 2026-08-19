import "@/app/style/gmb-service-pages.css";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  FaArrowRight,
  FaMailBulk,
  FaMapSigns,
  FaPhoneAlt,
  FaPhoneSlash,
  FaPlusCircle,
  FaRedoAlt,
  FaStar,
  FaUserAlt,
  FaVideo,
} from "react-icons/fa";
import { FaBoltLightning, FaCircleExclamation, FaGear } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { IoCall } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import GmbFaqs from "@/app/components/GmbFaqs";
import LeadContactForm from "@/app/components/LeadContactForm";
import Footer from "@/app/components/Footer";
import RelatedServices from "@/app/components/RelatedServices";
import HashScrollLink from "@/app/components/HashScrollLink";
import LenisIframeGuard from "@/app/components/LenisIframeGuard";
import { MdLocalOffer } from "react-icons/md";
import { BsQuestionCircleFill } from "react-icons/bs";
import ClutchWidget from "@/app/components/ClutchWidget";
import { buildBreadcrumbJsonLd } from "@/shared/seoSchemas";

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "GMB Verification Help", url: "/services/gmb-verification-help" },
]);

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.zonicllc.com/services/gmb-verification-help#service",
  name: "GMB Verification Help",
  alternateName: [
    "Google Business Profile Verification Service",
    "GBP Verification Help",
    "Google My Business Verification Service",
    "Google Maps Business Verification",
  ],
  serviceType: "Google Business Profile Verification",
  description:
    "Zonic Media resolves every type of Google Business Profile verification failure — postcards that never arrive, rejected video verification, verification loops, revoked verifications, and service-area business (SAB) verification. 1500+ listings verified and restored with a 95% success rate and 48-hour average resolution time. Verified client reviews on Trustpilot and Clutch.",
  url: "https://www.zonicllc.com/services/gmb-verification-help",
  provider: {
    "@type": "Organization",
    "@id": "https://www.zonicllc.com/#organization",
    name: "Zonic Media",
    telephone: "+1-302-726-9736",
    email: "contact@zonicllc.com",
  },
  areaServed: { "@type": "Country", name: "United States" },
  audience: {
    "@type": "BusinessAudience",
    name: "Local businesses, service-area businesses, and agencies unable to verify their Google Business Profile",
  },
  offers: {
    "@type": "Offer",
    name: "Free GMB verification audit",
    price: "0",
    priceCurrency: "USD",
    description:
      "Free verification audit identifying why your Google Business Profile won't verify and the fastest available verification path.",
  },
};

const GmbVerifiFaqs = [
  {
    question: "What Verification Methods Does Google Offer?",
    answer:
      "Google offers several methods depending on your business type: postcard by mail, video recording, phone call, email, and in some cases instant verification. We'll identify which options are available for your specific profile and guide you through the right one.",
  },
  {
    question: "My Postcard Keeps Getting Lost - What Can I Do?",
    answer:
      "We help businesses unlock alternative verification methods so you're not stuck waiting on a postcard that never arrives. In most cases, we can get you verified without a postcard at all.",
  },
  {
    question: "What Does Video Verification Involve?",
    answer:
      "Google requires a short video showing your business location, signage, equipment, and proof of operation. We give you a precise checklist of exactly what to film so it gets approved first time.",
  },
  {
    question: "My Verification Got Revoked After Passing - Why?",
    answer:
      "This usually indicates a deeper compliance issue - a duplicate listing conflict, a policy violation, or inconsistent business data. We diagnose the root cause and fix it so your verification sticks.",
  },
  {
    question:
      "I Run a Service Area Business with No Storefront - Can I Still Get Verified?",
    answer:
      "Yes. Service area businesses can be verified without displaying a physical address. We specialize in SAB verification and know exactly how to get these listings live on Google Maps.",
  },
  {
    question: "How Long Does Verification Take?",
    answer:
      "Typical cases are resolved within 5-7 business days depending on the verification method, though final approval timing is always controlled by Google. We'll give you a realistic timeline after your free audit.",
  },
  {
    question: "What Makes Zonic Media One of the Best GMB Verification Services?",
    answer:
      "Zonic Media has verified and restored 1500+ Google Business Profile listings with a 95% success rate and a 48-hour average resolution time. The team handles every failure type — postcard, video, phone, email, verification loops, and revoked verifications — and starts with a free audit so you know the exact path before paying anything. Independent client reviews are published on Trustpilot and Clutch.",
  },
];

const GmbVeriFormHead = {
  leadFormTitle: "Get Your Free GMB Verification Audit",
  leadCallText: (
    <>
      One call can help get your profile verified faster.
      <br />{" "}
      <a href="tel:+13027269736" className="lead-call-link">
        Call Now:(302) 726-9736
      </a>
    </>
  ),
};

export const metadata: Metadata = {
  title: {
    absolute: "Google Business Profile Verification Help | Zonic Media",
  },
  description:
    "Can't verify your Google Business Profile? Get expert help with postcard, video, phone, email, and other verification issues. Free consultation.",
  keywords: [
    "Google Business Profile verification help",
    "GMB verification",
    "GBP verification",
    "verify Google Business Profile",
    "video verification failed",
    "GBP verification loop",
    "postcard verification failed",
    "Google Business Profile not verified",
    "business profile verification service",
    "GMB verification service",
    "Google Business Profile verification stuck",
    "service area business verification",
    "get verified on Google Maps",
    "best GMB verification service",
  ],
  alternates: { canonical: "/services/gmb-verification-help" },
  openGraph: {
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zonic Media — Marketing Agency for Small & Mid-Size Businesses",
      },
    ],
    title:
      "Fix Google Business Profile Verification Issues & Get Verified Fast",
    description:
      "Can't verify your Google Business Profile? Zonic Media fixes failed postcard, video, phone & email verification and verification loops. Free consultation.",
    url: "/services/gmb-verification-help",
    type: "website",
  },
};

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
      <div id="gmb-reinst-top"></div>
      <div className="gmb-reinst-main-wrapper">
        {/*gmb-content-wrapper left-content*/}
        <div className="gmb-reinst-content-wrapper">
          {/*gmb-reinst-section-1*/}
          <div className="gmb-reinst-sec-1">
            <div className="gmb-reinst-sec-1-label-head">
              <p className="label-head">
                <span>
                  <LuUserRound />
                </span>
                Google Business Profile Verification Experts
              </p>
            </div>

            <h1 className="gmb-reinst-main-heading">
              Google Business Profile Verification Help That Gets Your Listing
              Verified
            </h1>

            <p className="gmb-reinst-descrp">
              Zonic Media helps businesses resolve all types of Google Business
              Profile verification failures - postcard not arriving, video
              verification rejected, phone or email options unavailable. Our
              specialists have deep platform expertise and know exactly how to
              get your profile verified and live on Google Maps fast — then link
              it to a conversion-ready{" "}
              <Link href="/services/web-design" className="gmb-inline-link">
                business website
              </Link>{" "}
              that turns clicks into customers.
            </p>

            <div className="gmb-reinst-sec-1-box">
              <p>
                <span>
                  <FaPhoneAlt />
                </span>
                Need Immediate GBP Verification Help? Call Now!
              </p>

              <p>
                Speak directly with a Google Business Profile verification
                specialist for fast, step-by-step guidance and expert support.
                One call can help you get verified faster, go live on Google
                Maps, and start attracting real customer inquiries.{" "}
                <Link href="tel:+13027269736"> Call Now: (302) 726-9736 </Link>
              </p>
            </div>

            <HashScrollLink href="#gmb-reinst-top" className="buttons">
              Get a Free Verification Consultation
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
            </HashScrollLink>

            <div className="gmb-reinst-sec-1-stats">
              <p>
                <span> 1500+ </span>
                Listings Verified & Restored
              </p>

              <p>
                <span> 95% </span>
                Success Rate
              </p>

              <p>
                <span> 48hrs </span>
                Average Resolution Time
              </p>
            </div>

            {/*--gmb-reinst-mob-form--*/}
            <div className="gmb-reinst-mob-form d-block d-lg-none">
              <LeadContactForm
                leadFormTitle={GmbVeriFormHead.leadFormTitle}
                leadCallText={GmbVeriFormHead.leadCallText}
              />
            </div>
          </div>

          {/*gmb-reinst-section-2*/}
          <div className="gmb-reinst-sec-2">
            <p>
              <Image
                src="/images/gmb-reinst/trust-img-1.svg"
                width={20}
                height={20}
                alt="google logo"
              ></Image>{" "}
              Trusted Google Specialists
            </p>

            <p>
              <Image
                src="/images/gmb-reinst/trust-img-3.svg"
                width={20}
                height={20}
                alt="rating star"
              ></Image>{" "}
              5 Client Satisfaction Rating
            </p>
            <p>
              <Image
                src="/images/gmb-reinst/trust-img-4.svg"
                width={20}
                height={20}
                alt="verified batch"
              ></Image>{" "}
              Verified Business Profile Listing
            </p>
            <p>
              <Image
                src="/images/gmb-reinst/trust-img-2.svg"
                width={20}
                height={20}
                alt="shield logo"
              ></Image>{" "}
              1500+ Listings Successfully Restored
            </p>
          </div>

          {/*gmb-reinst-section-3*/}
          <div className="gmb-reinst-sec-3 gmb-reinst-common-sec">
            <div className="gmb-reinst-common-sec-head">
              <p className="label-head">
                <FaCircleExclamation /> Google Business Profile Verification
                Issues
              </p>

              <h2 className="gmb-reinst-sec-heading">
                Common Reasons Google Business Profile Verification Fails
              </h2>
              <p className="gmb-reinst-descrp">
                Google Business Profile verification can fail when business
                details are incomplete, inconsistent, or don’t meet Google’s
                verification requirements. Our experts identify and fix the most
                common issues, helping you successfully verify your profile and
                get it live on Google Maps without delays.
              </p>
            </div>

            <div className="gmb-reinst-cards">
              <div className="gmb-reinst-card-wrapper">
                <p className="gmb-reinst-card-icon">
                  <FaMailBulk /> {/* Postcard */}
                </p>

                <h3 className="gmb-reinst-card-heading">
                  Postcard Never Arrives
                </h3>
                <p className="gmb-reinst-card-descrp">
                  Google&apos;s verification postcard can take weeks - and often
                  gets lost, sent to the wrong address, or expires before you
                  can use it. We help businesses navigate alternative
                  verification paths and get the process moving again.
                </p>
              </div>

              <div className="gmb-reinst-card-wrapper">
                <p className="gmb-reinst-card-icon">
                  <FaVideo /> {/* Video verification */}
                </p>

                <h3 className="gmb-reinst-card-heading">
                  Video Verification Rejected
                </h3>
                <p className="gmb-reinst-card-descrp">
                  Video verification is Google&apos;s newer method - and one of
                  the most confusing. Incorrect footage, wrong angles, or
                  missing storefront signage are common reasons for rejection.
                  We guide you through exactly what Google needs to approve it.
                </p>
              </div>

              <div className="gmb-reinst-card-wrapper">
                <p className="gmb-reinst-card-icon">
                  <FaPhoneSlash /> {/* Phone/email unavailable */}
                </p>

                <h3 className="gmb-reinst-card-heading">
                  Phone & Email Options Unavailable
                </h3>
                <p className="gmb-reinst-card-descrp">
                  Some businesses find phone and email verification options
                  simply don&apos;t appear in their dashboard. This is often
                  tied to profile age, business category, or flagged activity.
                  Our specialists know how to unlock these options.
                </p>
              </div>

              <div className="gmb-reinst-card-wrapper">
                <p className="gmb-reinst-card-icon">
                  <FaRedoAlt /> {/* Revoked / repeat */}
                </p>

                <h3 className="gmb-reinst-card-heading">
                  Verification Keeps Getting Revoked
                </h3>
                <p className="gmb-reinst-card-descrp">
                  Passing verification only to have it revoked shortly after is
                  a sign of a deeper compliance issue. We identify the root
                  cause - whether it&apos;s a policy conflict, duplicate
                  listing, or data inconsistency - and fix it properly.
                </p>
              </div>

              <div className="gmb-reinst-card-wrapper">
                <p className="gmb-reinst-card-icon">
                  <FaPlusCircle /> {/* New business */}
                </p>

                <h3 className="gmb-reinst-card-heading">
                  New Business Listing Can&apos;t Get Verified
                </h3>
                <p className="gmb-reinst-card-descrp">
                  Brand new listings sometimes get stuck in a verification loop
                  with no clear resolution path. We help new businesses get
                  their first verified listing live quickly and correctly, often
                  as part of a full{" "}
                  <Link href="/services/launchpad" className="gmb-inline-link">
                    business launch package
                  </Link>
                  .
                </p>
              </div>

              <div className="gmb-reinst-card-wrapper">
                <p className="gmb-reinst-card-icon">
                  <FaMapSigns /> {/* Service area */}
                </p>

                <h3 className="gmb-reinst-card-heading">
                  Service Area Business Verification
                </h3>
                <p className="gmb-reinst-card-descrp">
                  Service area businesses (SABs) -{" "}
                  <Link href="/services/plumbing-marketing-agency" className="gmb-inline-link">
                    plumbing companies
                  </Link>
                  , roofers, cleaners - face unique verification challenges since
                  they don&apos;t serve customers at a physical storefront. We
                  specialize in SAB verification strategies that work.
                </p>
              </div>
            </div>

            <div className="gmb-reinst-sec-3-img-cont">
              <Image
                src="/images/gmb-verify-1.png"
                fill
                alt="Google Business Profile verification process illustration"
              ></Image>
            </div>
          </div>

          {/*gmb-reinst-section-4*/}
          <div className="gmb-reinst-sec-4 gmb-reinst-common-sec">
            <div className="gmb-reinst-common-sec-head">
              <p className="label-head">
                <FaGear /> How It Works
              </p>

              <h2 className="gmb-reinst-sec-heading">
                Get Verified in 4 Clear Steps
              </h2>
              <p className="gmb-reinst-descrp">
                Verifying your Google Business Profile can feel confusing
                without the right guidance. Our proven step-by-step process
                simplifies everything—from choosing the correct verification
                method to meeting Google’s requirements—so your profile gets
                verified quickly and goes live on Google Maps without delays.
                Need customers before rankings build? We also run{" "}
                <Link href="/services/google-ads" className="gmb-inline-link">
                  Google Ads campaigns
                </Link>{" "}
                to drive leads from day one.
              </p>
            </div>

            <div className="gmb-reinst-cards">
              <div className="gmb-reinst-card-wrapper">
                <p className="gmb-reinst-card-icon">1</p>

                <h3 className="gmb-reinst-card-heading">
                  Free Verification Audit (Same Day)
                </h3>
                <p className="gmb-reinst-card-descrp">
                  We review your profile setup, business category, verification
                  history, and current status to identify exactly what&apos;s
                  blocking verification and the fastest path forward.
                </p>
              </div>

              <div className="gmb-reinst-card-wrapper">
                <p className="gmb-reinst-card-icon">2</p>

                <h3 className="gmb-reinst-card-heading">
                  Custom Verification Strategy (24-48 Hours)
                </h3>
                <p className="gmb-reinst-card-descrp">
                  Our specialists map out the right verification method for your
                  specific business type - whether that&apos;s postcard, video,
                  phone, email, or a direct escalation to Google support.
                </p>
              </div>

              <div className="gmb-reinst-card-wrapper">
                <p className="gmb-reinst-card-icon">3</p>

                <h3 className="gmb-reinst-card-heading">
                  Guided Implementation & Support (3-7 Days)
                </h3>
                <p className="gmb-reinst-card-descrp">
                  We walk you through every step of the verification process,
                  prepare you for video verification if needed, and actively
                  follow up with Google until your profile is verified and live.
                </p>
              </div>

              <div className="gmb-reinst-card-wrapper">
                <p className="gmb-reinst-card-icon">4</p>

                <h3 className="gmb-reinst-card-heading">
                  Profile Optimization (Post-Verification)
                </h3>
                <p className="gmb-reinst-card-descrp">
                  Once verified, we handle full{" "}
                  <Link href="/services/gmb-optimization" className="gmb-inline-link">
                    Google Business Profile optimization
                  </Link>{" "}
                  - categories, keywords, photos, posts - so you start ranking in
                  local search and attracting customers from day one.
                </p>
              </div>
            </div>

            <div className="gmb-reinst-sec-4-cta-banner">
              <h2>
                Every Day Your Profile Stays Unverified, You Lose Customers.
                Start Your Verification Process Today.
              </h2>

              <div className="gmb-reinst-sec-4-banner-ctas">
                <Link href="tel:+13027269736" className="buttons">
                  <IoCall />
                  Call: (302) 726-9736
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
                <HashScrollLink href="#gmb-reinst-top" className="buttons">
                  <FaUserAlt />
                  Get Expert Help
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
                </HashScrollLink>
              </div>
            </div>

            <div className="gmb-reinst-sec-4-img-cont">
              <Image
                src="/images/gmb-verify-2.png"
                fill
                alt="Google Business Profile verification process illustration"
              ></Image>
            </div>
          </div>

          {/*gmb-reinst-section-5*/}
          <div className="gmb-reinst-sec-5 gmb-reinst-common-sec">
            <div className="gmb-reinst-common-sec-head">
              <p className="label-head">
                <FaUserAlt />
                Why Choose Zonic Media
              </p>

              <h2 className="gmb-reinst-sec-heading">
                Why Businesses Trust Zonic Media for GBP Verification
              </h2>
              <p className="gmb-reinst-descrp">
                When your Google Business Profile isn’t verified, choosing the
                right partner makes all the difference. Our team combines deep
                platform expertise, proven verification strategies, and hands-on
                support to help you get verified quickly and ensure your listing
                goes live on Google Maps without unnecessary delays.
              </p>
            </div>

            <div className="gmb-reinst-cards">
              <div className="gmb-reinst-card-wrapper">
                <p className="gmb-reinst-card-icon gmb-reinst-sec-5-card-icon-1">
                  <Image
                    src="/images/gmb-reinst/gmb-choose-1.svg"
                    width={30}
                    height={30}
                    alt="group"
                  ></Image>
                </p>

                <h3 className="gmb-reinst-card-heading">
                  All Verification Methods Covered
                </h3>
                <p className="gmb-reinst-card-descrp">
                  Whether it&apos;s postcard, video, phone, email, or instant
                  verification - we know every method and which one works best
                  for your business type.
                </p>
              </div>

              <div className="gmb-reinst-card-wrapper">
                <p className="gmb-reinst-card-icon gmb-reinst-sec-5-card-icon-2">
                  <Image
                    src="/images/gmb-reinst/gmb-choose-2.svg"
                    width={30}
                    height={30}
                    alt="group"
                  ></Image>
                </p>

                <h3 className="gmb-reinst-card-heading">
                  Service Area Business Experts
                </h3>
                <p className="gmb-reinst-card-descrp">
                  SAB verification is complex and different from standard
                  listings. We have proven strategies specifically for
                  businesses without a public-facing address, including{" "}
                  <Link href="/services/google-business-profile-services-real-estate-agents" className="gmb-inline-link">
                    real estate agents
                  </Link>
                  .
                </p>
              </div>

              <div className="gmb-reinst-card-wrapper">
                <p className="gmb-reinst-card-icon gmb-reinst-sec-5-card-icon-3">
                  <Image
                    src="/images/gmb-reinst/gmb-choose-3.svg"
                    width={30}
                    height={30}
                    alt="group"
                  ></Image>
                </p>

                <h3 className="gmb-reinst-card-heading">
                  Compliance-First Approach
                </h3>
                <p className="gmb-reinst-card-descrp">
                  We fix verification the right way - making sure your profile
                  fully aligns with Google&apos;s guidelines so it stays
                  verified long-term and doesn&apos;t get revoked.
                </p>
              </div>

              <div className="gmb-reinst-card-wrapper">
                <p className="gmb-reinst-card-icon gmb-reinst-sec-5-card-icon-4">
                  <Image
                    src="/images/gmb-reinst/gmb-choose-4.svg"
                    width={30}
                    height={30}
                    alt="group"
                  ></Image>
                </p>

                <h3 className="gmb-reinst-card-heading">
                  Real Business Growth Focus
                </h3>
                <p className="gmb-reinst-card-descrp">
                  Getting verified is just the start. We make sure your newly
                  verified profile is optimized to rank, generate calls, and
                  drive real local leads through ongoing{" "}
                  <Link href="/services/local-seo-for-home-services" className="gmb-inline-link">
                    local SEO
                  </Link>
                  .
                </p>
              </div>
            </div>

            <LenisIframeGuard className="gmb-reinst-video">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/FnCtQnCis6M?si=8HwlibLCyeYTr0-7"
                title="YouTube video player"
                loading="eager"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </LenisIframeGuard>

          </div>

          {/*gmb-reinst-section-6*/}
          <div className="gmb-reinst-sec-6 gmb-reinst-common-sec">
            <div className="gmb-reinst-common-sec-head">
              <p className="label-head">
                <MdLocalOffer />
                What we offer
              </p>

              <h2 className="gmb-reinst-sec-heading">
                Simple, Transparent Packages
              </h2>
            </div>

            <div className="gmb-reinst-cards">
              <div className="gmb-reinst-price-card-wrapper">
                <p className="gmb-reinst-card-icon">
                  <span> 01 </span>
                </p>

                <h3 className="gmb-reinst-price-heading">Verification Fix</h3>

                <p className="gmb-reinst-descrp">
                  For businesses that just need to get verified
                </p>

                <ul className="gmb-reinst-price-list">
                  <li>
                    <GoDotFill /> Full verification audit
                  </li>
                  <li>
                    <GoDotFill /> Custom verification strategy
                  </li>
                  <li>
                    <GoDotFill /> Video verification guidance
                  </li>
                  <li>
                    <GoDotFill /> Google liaison & follow-up
                  </li>
                  <li>
                    <GoDotFill /> Profile health check
                  </li>
                </ul>
              </div>

              <div className="gmb-reinst-price-card-wrapper">
                <p className="gmb-reinst-card-icon">
                  <span> 02 </span>
                </p>

                <h3 className="gmb-reinst-price-heading">
                  Verify + Optimize - Most Popular
                </h3>

                <p className="gmb-reinst-descrp">
                  For businesses that want to verify and rank
                </p>

                <ul className="gmb-reinst-price-list">
                  <li>
                    <GoDotFill /> Everything in Verification Fix
                  </li>
                  <li>
                    <GoDotFill /> Full GMB profile optimization
                  </li>
                  <li>
                    <GoDotFill /> Category & keyword optimization
                  </li>
                  <li>
                    <GoDotFill /> Photo & description overhaul
                  </li>
                  <li>
                    <GoDotFill /> Google Posts setup
                  </li>
                  <li>
                    <GoDotFill /> Ongoing monitoring (30 days)
                  </li>
                </ul>
              </div>

              <div className="gmb-reinst-price-card-wrapper">
                <p className="gmb-reinst-card-icon">
                  <span> 03 </span>
                </p>

                <h3 className="gmb-reinst-price-heading">
                  Agency / Multi-Location
                </h3>

                <p className="gmb-reinst-descrp">
                  For agencies managing multiple unverified listings
                </p>

                <ul className="gmb-reinst-price-list">
                  <li>
                    <GoDotFill /> Everything in Verify + Optimize
                  </li>
                  <li>
                    <GoDotFill /> Multiple location handling
                  </li>
                  <li>
                    <GoDotFill /> Bulk verification strategy
                  </li>
                  <li>
                    <GoDotFill /> Dedicated account manager
                  </li>
                  <li>
                    <GoDotFill /> Priority support
                  </li>
                  <li>
                    <GoDotFill /> Monthly reporting
                  </li>
                </ul>
              </div>

              <div className="gmb-reinst-price-card-wrapper gmb-reinst-price-banner">
                <h3 className="gmb-reinst-price-banner-heading">
                  Don&apos;t Let an Unverified Profile Cost You More Customers
                </h3>

                <HashScrollLink href="#gmb-reinst-top" className="buttons">
                  Get Verified Now
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
                </HashScrollLink>
              </div>
            </div>
          </div>

          {/*gmb-reinst-section-7*/}
          <div className="gmb-reinst-sec-7 gmb-reinst-common-sec">
            <div className="gmb-reinst-common-sec-head">
              <p className="label-head">
                <FaStar />
                Client Results
              </p>

              <h2 className="gmb-reinst-sec-heading">
                Successful Google Business Profile Verification Cases
              </h2>
            </div>

            <div className="gmb-reinst-testimonial-wrapper">
              <ClutchWidget
                widgetType="12"
                height="375"
                primaryColor="#f7c00a"
                reviews="448872,448007,448005,447416,446728,446721,446714,446262,441531,442062,445226,445524"
              />
            </div>
          </div>

          {/*gmb-reinst-section-8*/}
          <div className="gmb-reinst-sec-8 gmb-reinst-common-sec">
            <div className="gmb-reinst-common-sec-head">
              <p className="label-head">
                {" "}
                <FaBoltLightning />
                We&apos;re So Confident, We Back It Up
              </p>

              <h2 className="gmb-reinst-sec-heading">
                Three Guarantee Pillars
              </h2>
            </div>

            <div className="gmb-reinst-sec-8-content">
              <ul>
                <li>
                  <h3>
                    <FaArrowRight />
                    Money-Back Guarantee
                  </h3>
                  <p>
                    If your profile is suspended rather than unverified, our{" "}
                    <Link href="/services/gmb-reinstatement-help" className="gmb-inline-link">
                      suspended Google Business Profile recovery
                    </Link>{" "}
                    steps in — and if we can&apos;t get your listing reinstated,
                    you pay nothing. We only win when you win.
                  </p>
                </li>

                <li>
                  <h3>
                    <FaArrowRight />
                    No Long Waits
                  </h3>
                  <p>
                    Our average reinstatement time is 5-7 business days. We
                    follow up aggressively so Google doesn&apos;t leave your
                    case idle.
                  </p>
                </li>

                <li>
                  <h3>
                    <FaArrowRight />
                    Expert-Only Work
                  </h3>
                  <p>
                    Every case is handled personally by a veteran GMB specialist
                    - not a junior freelancer or an automated tool.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/*gmb-reinst-section-9*/}

          <div className="gmb-reinst-sec-9 gmb-reinst-common-sec">
            <div className="gmb-reinst-common-sec-head">
              <p className="label-head">
                <BsQuestionCircleFill />
                Common Questions
              </p>

              <h2 className="gmb-reinst-sec-heading">
                Everything You Need to Know
              </h2>
              <p className="gmb-reinst-descrp">
                Find answers to the most important questions about suspension
                recovery and support
              </p>
            </div>

            <div className="gmb-reinst-faqs-wrapper">
              <GmbFaqs items={GmbVerifiFaqs} />
            </div>

            <script
              id="gmb-verifi-faq-schema"
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  "url": "https://zonicllc.com/services/gmb-verification-help",
                  mainEntity: GmbVerifiFaqs.map((faq) => ({
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
        </div>

        {/*gmb-reinst-contact-form-wrapper right-content*/}
        <div className="gmb-reinst-contact-form">
          <LeadContactForm
            leadFormTitle={GmbVeriFormHead.leadFormTitle}
            leadCallText={GmbVeriFormHead.leadCallText}
          />
        </div>
      </div>

      {/*gmb-reinst-banner-3*/}
      <div className="gmb-reinst-banner-3">
        <h2 className="gmb-reisnt-banner-3-heading">
          Every Day Unverified is a Day You&apos;re Invisible on Google.
        </h2>
        <p className="gmb-reisnt-banner-3-descrp">
          Your competitors are showing up on Google Maps right now. Get your
          profile verified and start winning local customers today.
        </p>

        <div className="gmb-reinst-banner-3-ctas">
          <Link href="tel:+13027269736" className="buttons">
            Call Now : (302) 726-9736
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

          <HashScrollLink href="#gmb-reinst-top" className="buttons">
            Get a Free Verification Consultation
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
          </HashScrollLink>
        </div>
      </div>

      <RelatedServices current="/services/gmb-verification-help" />
      <Footer />
    </>
  );
}

export default page;
