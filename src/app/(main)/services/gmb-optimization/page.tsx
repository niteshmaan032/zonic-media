import "@/app/style/gmb-service-pages.css";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Script from "next/script";
import {
  FaAlignLeft,
  FaArrowRight,
  FaBriefcase,
  FaImage,
  FaKey,
  FaLink,
  FaListUl,
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaPhotoVideo,
  FaQuestionCircle,
  FaRegNewspaper,
  FaSearch,
  FaStar,
  FaUserAlt,
} from "react-icons/fa";
import { FaBoltLightning, FaCircleExclamation, FaGear } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { IoCall } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import GmbFaqs from "@/app/components/GmbFaqs";
import LeadContactForm from "@/app/components/LeadContactForm";
import ClutchWidget from "@/app/components/ClutchWidget";
import Footer from "@/app/components/Footer";
import HashScrollLink from "@/app/components/HashScrollLink";
import LenisIframeGuard from "@/app/components/LenisIframeGuard";
import { MdLocalOffer } from "react-icons/md";
import { BsQuestionCircleFill } from "react-icons/bs";
import { buildBreadcrumbJsonLd } from "@/shared/seoSchemas";

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "GMB Optimization", url: "/services/gmb-optimization" },
]);

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.zonicllc.com/services/gmb-optimization#service",
  name: "GMB Optimization Service",
  alternateName: [
    "Google Business Profile Optimization Service",
    "GBP Optimization Service",
    "Google Maps Optimization",
    "Local Map Pack Optimization",
  ],
  serviceType: "Google Business Profile Optimization",
  description:
    "Zonic Media optimizes Google Business Profiles to rank in the local 3-Pack and Google Maps — category strategy, keyword-rich descriptions, photos, posts, Q&A, and review generation. 1500+ profiles optimized with 95% client satisfaction. Optimized profiles are also what Google's AI Overviews cite for local queries. Verified client reviews on Trustpilot and Clutch.",
  url: "https://www.zonicllc.com/services/gmb-optimization",
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
    name: "Local businesses, multi-location brands, and agencies that want to rank in the Google Map Pack",
  },
  offers: {
    "@type": "Offer",
    name: "Free GMB optimization audit",
    price: "0",
    priceCurrency: "USD",
    description:
      "Free Google Business Profile audit showing exactly which ranking signals your profile is missing.",
  },
};

const GmbOptimFaqs = [
  {
    question: "How Long Before I See Results from GMB Optimization?",
    answer:
      "Most clients see measurable improvements in profile views and ranking within 2-4 weeks of optimization. Local SEO results compound over time - the longer your profile stays optimized and active, the stronger it performs.",
  },
  {
    question: "My Profile is Already Set Up - Do I Still Need Optimization?",
    answer:
      'Yes. Having a profile is just the baseline. Most "set up" profiles are missing critical ranking signals - wrong categories, weak descriptions, no keyword strategy, minimal photos. A proper optimization can dramatically improve your visibility.',
  },
  {
    question: "Do You Manage Reviews as Part of Optimization?",
    answer:
      "Yes - in our Optimize + Manage package, we provide a review generation strategy to help you consistently earn 5-star reviews from happy customers, which is one of Google's top local ranking factors.",
  },
  {
    question: "What Industries Do You Optimize For?",
    answer:
      "We optimize profiles across all local service industries - restaurants, medical practices, law firms, home services, retail, and more. Our strategy is always tailored to your specific industry and local market.",
  },
  {
    question: "Can You Optimize Multiple Locations?",
    answer:
      "Yes. We work with multi-location businesses and agencies managing large numbers of profiles. Contact us for bulk pricing and white-label options.",
  },
  {
    question: "What's the Difference Between GMB Optimization and Local SEO?",
    answer:
      "GMB optimization focuses specifically on your Google Business Profile - categories, photos, posts, reviews. Local SEO is broader and includes your website, citations, and backlinks. Both work together - we offer both services.",
  },
  {
    question: "Does GMB Optimization Help My Business Appear in Google's AI Overviews?",
    answer:
      "Yes. Google's AI Overviews for local searches pull from verified, complete, and active Google Business Profiles - businesses with strong categories, recent reviews above 4.3 stars, fresh posts, and accurate service data are the ones AI answers cite. Our optimization covers exactly those signals, so your profile is eligible for both the Map Pack and AI-generated results.",
  },
  {
    question: "What Makes Zonic Media One of the Best GMB Optimization Services?",
    answer:
      "Zonic Media has optimized 1500+ Google Business Profiles with 95% client satisfaction and a 4.9 average rating. Every engagement starts with a free audit, the strategy is tailored to your industry and local market, and independent client reviews are published on Trustpilot and Clutch. We're also a reinstatement and verification specialist, so profiles we optimize stay compliant with Google's guidelines.",
  },
];

const GmbOptiFormHead = {
  leadFormTitle: "Get Your Free GMB Optimization Audit",
  leadCallText: (
    <>
      One call can help grow your business visibility.
      <br />{" "}
      <a href="tel:+13027269736" className="lead-call-link">
        Call Now:(302) 726-9736
      </a>
    </>
  ),
};

export const metadata: Metadata = {
  title: "GMB Optimization Service | Map Pack Ranking",
  description:
    "Zonic Media optimizes your Google Business Profile to rank in the local 3-Pack, get more calls, and convert more customers. Expert GMB optimization. Free audit.",
  keywords: [
    "Google Business Profile optimization service",
    "GMB optimization",
    "GBP optimization",
    "rank in Google Map Pack",
    "local 3-pack ranking",
    "GBP management",
    "Google Maps SEO",
    "optimize Google Business Profile",
    "Google Business Profile ranking",
    "local SEO for Google Maps",
    "best GMB optimization service",
    "Google Business Profile management service",
    "rank in AI Overviews local search",
    "GBP optimization agency",
  ],
  alternates: { canonical: "/services/gmb-optimization" },
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
      "Google Business Profile Optimization Service | Rank Higher on Google Maps",
    description:
      "Zonic Media optimizes your Google Business Profile to rank in the local 3-Pack, get more calls, and convert more customers. Expert GMB optimization. Free audit.",
    url: "/services/gmb-optimization",
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
                Google Business Profile Optimization Experts
              </p>
            </div>

            <h1 className="gmb-reinst-main-heading">
              Your GMB is Live. But is It Actually Working?
            </h1>

            <p className="gmb-reinst-descrp">
              Having a Google Business Profile and having one that ranks,
              converts, and drives real customers are two very different things.
              Zonic Media&apos;s GMB optimization specialists fine-tune every
              element of your profile - so you show up higher on Google Maps,
              get more calls, and turn profile visitors into paying customers.
              If your listing isn&apos;t live yet, we also handle{" "}
              <Link href="/services/gmb-verification-help" className="gmb-inline-link">
                Google Business Profile verification
              </Link>{" "}
              so you can start ranking sooner.
            </p>

            <div className="gmb-reinst-sec-1-box">
              <p>
                <span>
                  <FaPhoneAlt />
                </span>
                Want More Calls from Your Google Business Profile? Let’s Talk.
              </p>

              <p>
                Speak directly with a Google Business Profile optimization
                expert and discover exactly what’s holding your listing back.
                We’ll walk you through proven strategies to improve your Google
                Maps rankings, increase profile visibility, and turn searches
                into real customer calls.{" "}
                <Link href="tel:+13027269736"> Call Now: (302) 726-9736 </Link>
              </p>
            </div>
            <HashScrollLink href="#gmb-reinst-top" className="buttons">
              Get a Free GMB Audit
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

            <LenisIframeGuard
              className="gmb-reinst-google-reviews"
              widgetScriptSrc="https://cdn.trustindex.io/loader.js?bedc2ba73f755349bf36a19f52c"
            />

            <div className="gmb-reinst-sec-1-stats">
              <p>
                <span> 1500+ </span>
                Profiles Optimized
              </p>

              <p>
                <span> 95% </span>
                Client Satisfaction
              </p>

              <p>
                <span> 48hrs </span>
                Optimization Turnaround
              </p>
            </div>

            {/*--gmb-reinst-mob-form--*/}
            <div className="gmb-reinst-mob-form d-block d-lg-none">
              <LeadContactForm
                leadFormTitle={GmbOptiFormHead.leadFormTitle}
                leadCallText={GmbOptiFormHead.leadCallText}
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
                <FaCircleExclamation />
                Why Most GMB Profiles Underperform
              </p>

              <h2 className="gmb-reinst-sec-heading">
                A Live Profile Isn&apos;t Enough - Here&apos;s What&apos;s
                Holding You Back
              </h2>
              <p className="gmb-reinst-descrp">
                Most Google Business Profiles underperform not because they’re
                inactive, but because they’re not fully optimized. From
                incorrect categories and weak keyword targeting to missing
                content and low engagement signals, small gaps can significantly
                impact your visibility. Our experts identify and fix these
                issues to help your profile rank higher on Google Maps, attract
                more local searches, and convert visitors into real customers —
                and for businesses that need leads immediately, we can layer in{" "}
                <Link href="/services/google-ads" className="gmb-inline-link">
                  Google Ads management
                </Link>{" "}
                alongside the organic work.
              </p>
            </div>

            <div className="gmb-reinst-cards">
              <div className="gmb-reinst-card-wrapper">
                <p className="gmb-reinst-card-icon">
                  <FaListUl /> {/* Categories */}
                </p>

                <h3 className="gmb-reinst-card-heading">
                  Wrong Business Categories
                </h3>
                <p className="gmb-reinst-card-descrp">
                  Most businesses pick the first category that sounds right -
                  but Google uses categories as one of its strongest ranking
                  signals. The wrong primary or secondary category means
                  you&apos;re invisible for your most valuable searches.
                </p>
              </div>

              <div className="gmb-reinst-card-wrapper">
                <p className="gmb-reinst-card-icon">
                  <FaSearch /> {/* Keywords */}
                </p>

                <h3 className="gmb-reinst-card-heading">
                  Weak or Missing Keywords
                </h3>
                <p className="gmb-reinst-card-descrp">
                  Your business description, services, and posts need to include
                  the exact terms your customers are searching for. Without
                  strategic keyword placement, Google doesn&apos;t know when to
                  show your profile.
                </p>
              </div>

              <div className="gmb-reinst-card-wrapper">
                <p className="gmb-reinst-card-icon">
                  <FaImage /> {/* Photos */}
                </p>

                <h3 className="gmb-reinst-card-heading">
                  Poor Photo Quality & Quantity
                </h3>
                <p className="gmb-reinst-card-descrp">
                  Profiles with 10+ high-quality photos get significantly more
                  clicks and direction requests than those with 1-2 stock
                  images. Most businesses either skip photos or upload the wrong
                  types entirely.
                </p>
              </div>

              <div className="gmb-reinst-card-wrapper">
                <p className="gmb-reinst-card-icon">
                  <FaRegNewspaper /> {/* Posts */}
                </p>

                <h3 className="gmb-reinst-card-heading">
                  No Google Posts Activity
                </h3>
                <p className="gmb-reinst-card-descrp">
                  Google Posts signal to Google that your business is active and
                  relevant. Inactive profiles - no posts, no updates - are
                  deprioritized in local rankings. Most businesses post once and
                  forget.
                </p>
              </div>

              <div className="gmb-reinst-card-wrapper">
                <p className="gmb-reinst-card-icon">
                  <FaQuestionCircle /> {/* Q&A */}
                </p>

                <h3 className="gmb-reinst-card-heading">
                  Unanswered Q&A Section
                </h3>
                <p className="gmb-reinst-card-descrp">
                  Google&apos;s Q&amp;A section is publicly visible and directly
                  affects trust and conversions. Leaving it empty or unanswered
                  - or worse, letting competitors answer for you - costs you
                  customers.
                </p>
              </div>

              <div className="gmb-reinst-card-wrapper">
                <p className="gmb-reinst-card-icon">
                  <FaStar /> {/* Reviews */}
                </p>

                <h3 className="gmb-reinst-card-heading">No Review Strategy</h3>
                <p className="gmb-reinst-card-descrp">
                  Reviews are one of Google&apos;s top local ranking factors.
                  Businesses without a consistent review generation strategy
                  fall behind competitors who actively manage their online
                  reputation.
                </p>
              </div>
            </div>

            <div className="gmb-reinst-sec-3-img-cont">
              <Image
                src="/images/gmb-optim-1.png"
                fill
                alt="Google Business Profile optimization dashboard illustration"
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
                A Fully Optimized GMB in 4 Steps
              </h2>
              <p className="gmb-reinst-descrp">
                Optimizing your Google Business Profile isn’t about making
                random updates — it’s a structured process focused on improving
                visibility, relevance, and engagement. Our step-by-step approach
                ensures every element of your profile is aligned with Google’s
                ranking factors, helping you rank higher on Google Maps, attract
                more local traffic, and convert searches into consistent
                customer inquiries.
              </p>
            </div>

            <div className="gmb-reinst-cards">
              <div className="gmb-reinst-card-wrapper">
                <p className="gmb-reinst-card-icon">1</p>

                <h3 className="gmb-reinst-card-heading">
                  Free GMB Audit (Same Day)
                </h3>
                <p className="gmb-reinst-card-descrp">
                  We do a full health check of your current profile -
                  categories, keywords, photos, posts, reviews, Q&amp;A, and
                  completeness score - and identify exactly what&apos;s holding
                  you back.
                </p>
              </div>

              <div className="gmb-reinst-card-wrapper">
                <p className="gmb-reinst-card-icon">2</p>

                <h3 className="gmb-reinst-card-heading">
                  Custom Optimization Strategy (24-48 Hours)
                </h3>
                <p className="gmb-reinst-card-descrp">
                  Our specialists build a tailored optimization plan based on
                  your business type, service area, target keywords, and
                  competitive landscape.
                </p>
              </div>

              <div className="gmb-reinst-card-wrapper">
                <p className="gmb-reinst-card-icon">3</p>

                <h3 className="gmb-reinst-card-heading">
                  Full Profile Optimization (3-5 Days)
                </h3>
                <p className="gmb-reinst-card-descrp">
                  We implement everything - categories, business description,
                  keyword placement, services, photos, Q&amp;A, Google Posts,
                  and attributes - leaving nothing on the table.
                </p>
              </div>

              <div className="gmb-reinst-card-wrapper">
                <p className="gmb-reinst-card-icon">4</p>

                <h3 className="gmb-reinst-card-heading">
                  Monitoring & Ongoing Growth
                </h3>
                <p className="gmb-reinst-card-descrp">
                  We monitor your profile performance, track ranking
                  improvements, and make ongoing adjustments to keep you at the
                  top of local search long-term.
                </p>
              </div>
            </div>

            <div className="gmb-reinst-sec-4-cta-banner">
              <h2>
                Every Day Your Google Business Profile Isn’t Optimized, You’re
                Losing Customers. Start Ranking Higher Today.
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
                src="/images/gmb-optim-2.png"
                fill
                alt="Google Business Profile optimization service in action"
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
                Why Businesses Choose Zonic Media for GMB Optimization
              </h2>
              <p className="gmb-reinst-descrp">
                Choosing the right Google Business Profile optimization partner
                can directly impact your local rankings and lead flow. Paired
                with our broader{" "}
                <Link href="/services/local-seo-for-home-services" className="gmb-inline-link">
                  local SEO services
                </Link>
                , we combine data-driven strategies, industry-specific
                expertise, and proven optimization techniques to help your
                business rank higher on Google Maps, increase profile
                visibility, and consistently generate more calls, leads, and
                customers.
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
                  Deep Platform Expertise
                </h3>
                <p className="gmb-reinst-card-descrp">
                  Our specialists have optimized 1,500+ Google Business Profiles
                  across{" "}
                  <Link href="/industries" className="gmb-inline-link">
                    dozens of industries
                  </Link>
                  . We know what Google&apos;s algorithm actually responds to -
                  not what worked 3 years ago.
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
                  Industry-Specific Strategy
                </h3>
                <p className="gmb-reinst-card-descrp">
                  Optimizing a restaurant profile is completely different from
                  optimizing a law firm or a{" "}
                  <Link href="/services/roofing-marketing-agency" className="gmb-inline-link">
                    roofing company
                  </Link>
                  . We tailor every strategy to your specific industry,
                  competitors, and local market.
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
                  Rankings You Can Measure
                </h3>
                <p className="gmb-reinst-card-descrp">
                  We don&apos;t just make your profile look better - we track
                  ranking improvements, profile views, call clicks, and
                  direction requests so you can see the real impact.
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
                  Long-Term Results Focus
                </h3>
                <p className="gmb-reinst-card-descrp">
                  We build profiles that maintain rankings over time - not quick
                  fixes that fade. Consistent posts, review management, and
                  ongoing monitoring keep you ahead of competitors.
                </p>
              </div>
            </div>
          </div>

          <div className="gmb-reinst-sec-5 gmb-reinst-common-sec">
            <div className="gmb-reinst-common-sec-head">
              <p className="label-head">
                <MdLocalOffer />
                What We Do
              </p>

              <h2 className="gmb-reinst-sec-heading">
                Every Element. Fully Optimized.
              </h2>
              <p className="gmb-reinst-descrp">
                We optimize every ranking signal inside your Google Business
                Profile so the listing is complete, competitive, and built to
                convert local search traffic into real customers. Just starting
                out? Our{" "}
                <Link href="/services/launchpad" className="gmb-inline-link">
                  business launch package
                </Link>{" "}
                sets up and optimizes your profile from day one.
              </p>
            </div>

            <div className="gmb-reinst-cards">
              <div className="gmb-reinst-card-wrapper">
                <p className="gmb-reinst-card-icon">
                  <FaListUl /> {/* Categories */}
                </p>
                <h3 className="gmb-reinst-card-heading">Business Categories</h3>
                <p className="gmb-reinst-card-descrp">
                  Primary and secondary categories strategically selected for
                  maximum ranking.
                </p>
              </div>

              <div className="gmb-reinst-card-wrapper">
                <p className="gmb-reinst-card-icon">
                  <FaAlignLeft /> {/* Description */}
                </p>
                <h3 className="gmb-reinst-card-heading">
                  Business Description
                </h3>
                <p className="gmb-reinst-card-descrp">
                  Keyword-rich, compelling description written to rank and
                  convert.
                </p>
              </div>

              <div className="gmb-reinst-card-wrapper">
                <p className="gmb-reinst-card-icon">
                  <FaPhotoVideo /> {/* Media */}
                </p>
                <h3 className="gmb-reinst-card-heading">Photos &amp; Videos</h3>
                <p className="gmb-reinst-card-descrp">
                  Right types, right quantity, right naming for clicks and
                  rankings.
                </p>
              </div>

              <div className="gmb-reinst-card-wrapper">
                <p className="gmb-reinst-card-icon">
                  <FaKey /> {/* Keywords */}
                </p>
                <h3 className="gmb-reinst-card-heading">
                  Keywords &amp; Attributes
                </h3>
                <p className="gmb-reinst-card-descrp">
                  Strategic placement across every profile element Google
                  indexes.
                </p>
              </div>

              <div className="gmb-reinst-card-wrapper">
                <p className="gmb-reinst-card-icon">
                  <FaRegNewspaper /> {/* Posts */}
                </p>
                <h3 className="gmb-reinst-card-heading">Google Posts</h3>
                <p className="gmb-reinst-card-descrp">
                  Regular, optimized posts that signal activity and drive
                  engagement.
                </p>
              </div>

              <div className="gmb-reinst-card-wrapper">
                <p className="gmb-reinst-card-icon">
                  <FaQuestionCircle /> {/* Q&A */}
                </p>
                <h3 className="gmb-reinst-card-heading">Q&amp;A Management</h3>
                <p className="gmb-reinst-card-descrp">
                  Pre-populated answers to common questions that build trust and
                  convert.
                </p>
              </div>

              <div className="gmb-reinst-card-wrapper">
                <p className="gmb-reinst-card-icon">
                  <FaStar /> {/* Reviews */}
                </p>
                <h3 className="gmb-reinst-card-heading">Review Strategy</h3>
                <p className="gmb-reinst-card-descrp">
                  Proven system to generate consistent 5-star reviews from happy
                  customers.
                </p>
              </div>

              <div className="gmb-reinst-card-wrapper">
                <p className="gmb-reinst-card-icon">
                  <FaMapMarkedAlt /> {/* Service Area */}
                </p>
                <h3 className="gmb-reinst-card-heading">Service Area Setup</h3>
                <p className="gmb-reinst-card-descrp">
                  Correctly configured service areas for maximum local
                  visibility.
                </p>
              </div>

              <div className="gmb-reinst-card-wrapper">
                <p className="gmb-reinst-card-icon">
                  <FaBriefcase /> {/* Services */}
                </p>
                <h3 className="gmb-reinst-card-heading">
                  Services &amp; Products
                </h3>
                <p className="gmb-reinst-card-descrp">
                  Fully built-out services section with descriptions and
                  pricing.
                </p>
              </div>

              <div className="gmb-reinst-card-wrapper">
                <p className="gmb-reinst-card-icon">
                  <FaLink /> {/* Links */}
                </p>
                <h3 className="gmb-reinst-card-heading">
                  Website &amp; Link Signals
                </h3>
                <p className="gmb-reinst-card-descrp">
                  Correct NAP consistency and citation alignment across the web,
                  backed by a fast, SEO-ready{" "}
                  <Link href="/services/web-design" className="gmb-inline-link">
                    business website
                  </Link>
                  .
                </p>
              </div>
            </div>
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

                <h3 className="gmb-reinst-price-heading">
                  One-Time Optimization
                </h3>

                <p className="gmb-reinst-descrp">
                  For businesses that want a fully optimized profile
                </p>

                <ul className="gmb-reinst-price-list">
                  <li>
                    <GoDotFill /> Complete GMB audit
                  </li>
                  <li>
                    <GoDotFill /> Category & keyword optimization
                  </li>
                  <li>
                    <GoDotFill /> Business description rewrite
                  </li>
                  <li>
                    <GoDotFill /> Photo optimization guidance
                  </li>
                  <li>
                    <GoDotFill /> Services & attributes setup
                  </li>
                  <li>
                    <GoDotFill /> Q&amp;A population
                  </li>
                  <li>
                    <GoDotFill /> One month of Google Posts
                  </li>
                </ul>
              </div>

              <div className="gmb-reinst-price-card-wrapper">
                <p className="gmb-reinst-card-icon">
                  <span> 02 </span>
                </p>

                <h3 className="gmb-reinst-price-heading">
                  Optimize + Manage - Most Popular
                </h3>

                <p className="gmb-reinst-descrp">
                  For businesses that want ongoing dominance
                </p>

                <ul className="gmb-reinst-price-list">
                  <li>
                    <GoDotFill /> Everything in One-Time Optimization
                  </li>
                  <li>
                    <GoDotFill /> Monthly Google Posts (4 per month)
                  </li>
                  <li>
                    <GoDotFill /> Review generation strategy
                  </li>
                  <li>
                    <GoDotFill /> Monthly performance report
                  </li>
                  <li>
                    <GoDotFill /> Ongoing keyword updates
                  </li>
                  <li>
                    <GoDotFill /> Competitor monitoring
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
                  For agencies or multi-location businesses
                </p>

                <ul className="gmb-reinst-price-list">
                  <li>
                    <GoDotFill /> Everything in Optimize + Manage
                  </li>
                  <li>
                    <GoDotFill /> Multiple location optimization
                  </li>
                  <li>
                    <GoDotFill /> Dedicated account manager
                  </li>
                  <li>
                    <GoDotFill /> Priority support
                  </li>
                  <li>
                    <GoDotFill /> White-label reporting available
                  </li>
                </ul>
              </div>

              <div className="gmb-reinst-price-card-wrapper gmb-reinst-price-banner">
                <h3 className="gmb-reinst-price-banner-heading">
                  Don&apos;t Let an Unoptimized Profile Cost You More Customers
                </h3>

                <HashScrollLink href="#gmb-reinst-top" className="buttons">
                  Optimize Profile Now
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
                Real Businesses. Real Results.
              </h2>
            </div>

            <ClutchWidget
              widgetType="12"
              height="375"
              primaryColor="#f7c00a"
              reviews="448872,448007,448005,447416,446728,446721,446714,446262,441531,442062,445226,445524"
            />
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
                    Results-Driven Approach
                  </h3>
                  <p>
                    If your profile is suspended, our{" "}
                    <Link href="/services/gmb-reinstatement-help" className="gmb-inline-link">
                      GMB reinstatement service
                    </Link>{" "}
                    recovers it first — and if we can&apos;t get your listing
                    reinstated, you pay nothing. We only win when you win.
                  </p>
                </li>

                <li>
                  <h3>
                    <FaArrowRight />
                    No Long Waits
                  </h3>
                  <p>
                    Our average reinstatement time is 5 to 7 business days. We
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
              <GmbFaqs items={GmbOptimFaqs} />
            </div>

            <Script
              id="gmb-optim-faq-schema"
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  url: "https://zonicllc.com/services/gmb-optimization",
                  mainEntity: GmbOptimFaqs.map((faq) => ({
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
            leadFormTitle={GmbOptiFormHead.leadFormTitle}
            leadCallText={GmbOptiFormHead.leadCallText}
          />
        </div>
      </div>

      {/*gmb-reinst-banner-3*/}
      <div className="gmb-reinst-banner-3">
        <h2 className="gmb-reisnt-banner-3-heading">
          Your Competitors are Optimized. Are You?
        </h2>
        <p className="gmb-reisnt-banner-3-descrp">
          Right now, customers in your area are searching for exactly what you
          offer. Make sure your Google Business Profile is the one they find,
          click, and call.
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
            Get a Free GMB Audit
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

      <Footer />
    </>
  );
}

export default page;
