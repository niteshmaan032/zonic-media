import GmbReviews from "@/app/components/GmbReviews";
import GmbReinstProfileSwiper from "@/app/components/GmbReinstProfileSwiper";
import "@/app/style/gmb-reinstatement.css";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Script from "next/script";
import { FaArrowRight, FaPhoneAlt, FaStar, FaUserAlt } from "react-icons/fa";
import {
  FaBoltLightning,
  FaCircleExclamation,
  FaGear,
  FaLocationDot,
  FaTriangleExclamation,
} from "react-icons/fa6";
import { GoDotFill, GoShieldCheck } from "react-icons/go";
import { IoCall } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import LeadContactForm from "@/app/components/LeadContactForm";
import GmbFaqs from "@/app/components/GmbFaqs";
import Footer from "@/app/components/Footer";
import HashScrollLink from "@/app/components/HashScrollLink";
import { MdLocalOffer } from "react-icons/md";
import { BsExclamationCircleFill, BsQuestionCircleFill } from "react-icons/bs";
import { HiMiniUserGroup } from "react-icons/hi2";
import { IoIosCloseCircle } from "react-icons/io";
import { AiFillStop } from "react-icons/ai";

const GmbResinstFaqs = [
  {
    question: "What types of GMB suspensions do you handle?",
    answer:
      "We handle all suspension types including soft suspensions, hard suspensions, disabled listings, and suspended pending verification profiles. If your listing is suspended, our team has likely handled a similar case before.",
  },
  {
    question: "How long does reinstatement take?",
    answer:
      "Most Google Business Profile reinstatement cases are resolved within 5 to 7 business days. More complex cases or those requiring video verification may take up to 14 days. We provide a realistic timeline after your audit.",
  },
  {
    question: "What if Google rejects the appeal?",
    answer:
      "We do not stop after one appeal. If Google rejects the request, we review the reason, improve the strategy, correct any issues, and resubmit with stronger documentation.",
  },
  {
    question: "Do I need to provide anything?",
    answer:
      "Yes. We usually require basic business documents such as a utility bill, business registration, or other proof of legitimacy to support the appeal. We will guide you on exactly what is needed after the audit.",
  },
  {
    question: "What is GMB Optimization and why do I need it?",
    answer:
      "After reinstatement, we optimize your Google Business Profile with the right categories, keywords, images, posts, and Q&A. This helps improve local rankings, visibility, and customer inquiries.",
  },
  {
    question: "Do you work with agencies?",
    answer:
      "Yes. We work with digital marketing agencies managing multiple Google Business Profiles for clients. Contact us for agency pricing and partnership options.",
  },
];

const GmbReinstReviews = [
  {
    review:
      '"Our restaurant was suspended for 3 weeks and we had no idea why. Zonic Media diagnosed the issue within hours and had us back on Google Maps in 6 days. The difference in walk-ins was immediate."',
    author: "Kim",
    role: "Restaurant Owner, Los Angeles",
  },
  {
    review: `"I tried to appeal myself twice and it made things worse. Zonic's team knew exactly what to say to Google. Reinstated in under a week. Highly recommend to any business owner."`,
    author: "Dan .",
    role: "Appliance Repair Service, Canada",
  },
  {
    review:
      '"We manage GMB profiles for 12 client locations. Zonic Media is our go-to partner for any suspension issue. Fast, professional, and they actually explain what went wrong."',
    author: "Randy.",
    role: "MXD Digital Marketing Agency, Utah",
  },
];

const GmbReinsFormHead = {
  leadFormTitle: "Get Your Free GMB Suspension Audit",
  leadCallText: (
    <>
      One call can help recover your lost business visibility. <br />{" "}
      <a href="tel:+13027269736" className="lead-call-link">
        Call Now:(302) 726-9736
      </a>
    </>
  ),
};

export const metadata: Metadata = {
  title: "GBP Suspension Recovery Experts | Zonic Media LLC",
  description:
    "Need help with a suspended Google Business Profile? Our experts handle reinstatement, compliance fixes, and fast recovery support.",
};

function page() {
  return (
    <>
      <div id="gmb-reinst-top"></div>
      <div className="gmb-reinst-main-wrapper">
        {/*gmb-content-wrapper left-content*/}
        <div className="gmb-reinst-content-wrapper">
          {/*gmb-reinst-section-1*/}
          <div className="gmb-reinst-sec-1">
            <div className="gmb-reinst-sec-1-label-head">
              <p className="label-head">
                <span>
                  <GoShieldCheck />
                </span>
                95% Reinstatement Success Rate
              </p>

              <p className="label-head">
                <span>
                  <LuUserRound />
                </span>
                Google Business Profile Specialists
              </p>
            </div>

            <h1 className="gmb-reinst-main-heading">
              Fix Suspended Google Business Profile & Get Back on Google Maps
              Fast
            </h1>

            <p className="gmb-reinst-descrp">
              Zonic Media provides expert Google Business Profile reinstatement
              services to help businesses recover suspended listings, resolve
              compliance issues, and restore lost visibility, calls, and local
              leads quickly and safely. Our specialists have deep platform
              expertise, including prior Google ecosystem experience, helping
              resolve suspensions faster. Our proven process gets your business
              back online with minimal downtime.
            </p>

            <div className="gmb-reinst-sec-1-box">
              <p>
                <span>
                  <FaPhoneAlt />
                </span>
                Need Immediate GBP Suspension Help? Call Now!
              </p>

              <p>
                Speak directly with a Google Business Profile specialist for
                fast recovery guidance and professional reinstatement support.
                One call can help restore your rankings, visibility, and
                customer inquiries quickly.{" "}
                <Link href="tel:+13027269736"> Call Now: (302) 726-9736 </Link>
              </p>
            </div>

            <HashScrollLink href="#gmb-reinst-top" className="buttons">
              Get a Free Suspension Audit
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
                Listing Restored
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
                leadFormTitle={GmbReinsFormHead.leadFormTitle}
                leadCallText={GmbReinsFormHead.leadCallText}
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
              4.9/5 Client Satisfaction Rating
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
                <FaCircleExclamation /> Google Business Profile Suspension
                Issues
              </p>

              <h2 className="gmb-reinst-sec-heading">
                Common Reasons Google Business Profiles Get Suspended
              </h2>
              <p className="gmb-reinst-descrp">
                Google Business Profile listings may be suspended when business
                details conflict with Google’s guidelines, verification
                standards, or trust signals. Our experts regularly resolve
                suspensions caused by the most common compliance and listing
                issues.
              </p>
            </div>

            <div className="gmb-reinst-cards">
              <div className="gmb-reinst-card-wrapper">
                <p className="gmb-reinst-card-icon">
                  <FaLocationDot />
                </p>

                <h3 className="gmb-reinst-card-heading">
                  Address Verification Issues
                </h3>
                <p className="gmb-reinst-card-descrp">
                  Incorrect addresses, virtual offices, P.O. boxes, or
                  inconsistent location details can trigger suspension. We help
                  correct and verify your business information properly.
                </p>
              </div>

              <div className="gmb-reinst-card-wrapper">
                <p className="gmb-reinst-card-icon">
                  <FaTriangleExclamation />
                </p>

                <h3 className="gmb-reinst-card-heading">
                  Guideline Violations
                </h3>
                <p className="gmb-reinst-card-descrp">
                  Keyword stuffing, misleading business names, or restricted
                  practices can lead to suspension. We identify violations and
                  bring your profile into compliance.
                </p>
              </div>

              <div className="gmb-reinst-card-wrapper">
                <p className="gmb-reinst-card-icon">
                  <BsExclamationCircleFill />
                </p>

                <h3 className="gmb-reinst-card-heading">
                  Frequent Listing Changes
                </h3>
                <p className="gmb-reinst-card-descrp">
                  Repeated edits to business name, category, phone number, or
                  address may flag suspicious activity. We stabilize your
                  profile and correct risky changes.
                </p>
              </div>

              <div className="gmb-reinst-card-wrapper">
                <p className="gmb-reinst-card-icon">
                  <IoIosCloseCircle />
                </p>

                <h3 className="gmb-reinst-card-heading">Duplicate Listings</h3>
                <p className="gmb-reinst-card-descrp">
                  Multiple profiles for the same business location can create
                  conflicts and suspension risks. We resolve duplicates and
                  clean up your listing presence.
                </p>
              </div>

              <div className="gmb-reinst-card-wrapper">
                <p className="gmb-reinst-card-icon">
                  <HiMiniUserGroup />
                </p>

                <h3 className="gmb-reinst-card-heading">
                  Ownership & Access Disputes
                </h3>
                <p className="gmb-reinst-card-descrp">
                  Former employees, agencies, or multiple admins can create
                  ownership conflicts. We help secure control and restore proper
                  account access.
                </p>
              </div>

              <div className="gmb-reinst-card-wrapper">
                <p className="gmb-reinst-card-icon">
                  <AiFillStop />
                </p>

                <h3 className="gmb-reinst-card-heading">
                  Review & Trust Signals
                </h3>
                <p className="gmb-reinst-card-descrp">
                  Spam reviews, unusual activity, or weak trust signals may
                  impact profile status. We strengthen profile credibility and
                  support successful recovery.
                </p>
              </div>
            </div>

            <div className="gmb-reinst-sec-3-img-cont">
              <Image
                src="/images/gmb-reinst/gmb-reinst-banner.svg"
                fill
                alt="gmb-account-recover"
              ></Image>
            </div>
          </div>

          {/*gmb-reinst-section-4*/}
          <div className="gmb-reinst-sec-4 gmb-reinst-common-sec">
            <div className="gmb-reinst-common-sec-head">
              <p className="label-head">
                <FaGear /> How it works
              </p>

              <h2 className="gmb-reinst-sec-heading">
                Back on Google in 4 Proven Steps
              </h2>
              <p className="gmb-reinst-descrp">
                Google Business Profile listings can be suspended when they
                violate Google&apos;s guidelines or contain inconsistent
                business information. Based on Google&apos;s policies and common
                industry cases, some of the most frequent causes of suspension
                include:
              </p>
            </div>

            <div className="gmb-reinst-cards">
              <div className="gmb-reinst-card-wrapper">
                <p className="gmb-reinst-card-icon">1</p>

                <h3 className="gmb-reinst-card-heading">
                  Free Suspension Audit (Same Day)
                </h3>
                <p className="gmb-reinst-card-descrp">
                  We review your profile, identify the exact suspension reason,
                  and assess your reinstatement options — completely free, no
                  commitment.
                </p>
              </div>

              <div className="gmb-reinst-card-wrapper">
                <p className="gmb-reinst-card-icon">2</p>

                <h3 className="gmb-reinst-card-heading">
                  Custom Reinstatement Strategy (24–48 Hours)
                </h3>
                <p className="gmb-reinst-card-descrp">
                  Our veteran experts build a tailored appeal with the right
                  documentation, language, and evidence Google actually responds
                  to.
                </p>
              </div>

              <div className="gmb-reinst-card-wrapper">
                <p className="gmb-reinst-card-icon">3</p>

                <h3 className="gmb-reinst-card-heading">
                  Appeal Submission & Follow-Up (3–7 Days)
                </h3>
                <p className="gmb-reinst-card-descrp">
                  We submit your appeal and actively follow up with Google,
                  making adjustments as needed until reinstatement is achieved.
                </p>
              </div>

              <div className="gmb-reinst-card-wrapper">
                <p className="gmb-reinst-card-icon">4</p>

                <h3 className="gmb-reinst-card-heading">
                  GMB Optimization (Post-Reinstatement)
                </h3>
                <p className="gmb-reinst-card-descrp">
                  Once live, we optimize your profile — categories, keywords,
                  photos, posts — so you rank higher and attract more customers
                  than before.
                </p>
              </div>
            </div>

            <div className="gmb-reinst-sec-4-cta-banner">
              <h2>
                Every Hour Your Profile Stays Suspended, You Lose Customers.
                Start Your Case Review Today.
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
                src="/images/gmb-reinst/gmb-reinst-banner-2.svg"
                fill
                alt="gmb-account-recover"
              ></Image>
            </div>
          </div>

          {/*gmb-reinst-section-5*/}
          <div className="gmb-reinst-sec-5 gmb-reinst-common-sec">
            <div className="gmb-reinst-common-sec-head">
              <p className="label-head">
                <FaUserAlt /> Why Choose Zonic Media
              </p>

              <h2 className="gmb-reinst-sec-heading">
                Why Businesses Trust Zonic Media for GBP Reinstatement
              </h2>
              <p className="gmb-reinst-descrp">
                When your Google Business Profile is suspended, choosing the
                right recovery partner matters. Our team combines deep platform
                expertise, compliance-focused strategies, and fast action to
                help restore your listing with minimal downtime.
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
                  Experienced Reinstatement Specialists
                </h3>
                <p className="gmb-reinst-card-descrp">
                  We understand suspension triggers, policy requirements, and
                  the right recovery steps needed for faster approvals.
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
                  Faster Resolution Process
                </h3>
                <p className="gmb-reinst-card-descrp">
                  Our structured reinstatement process helps reduce delays and
                  gets your profile back online quickly.
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
                  We fix the root cause of suspension and align your profile
                  with Google guidelines to prevent repeat issues.
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
                  We don’t just recover listings we help restore your rankings,
                  calls, leads, and long-term local visibility.
                </p>
              </div>
            </div>

            <div className="gmb-reinst-video">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/FnCtQnCis6M?si=8HwlibLCyeYTr0-7"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>

            <div className="gmb-reinst-profile-slider">
              <h2 className="gmb-reinst-sec-heading">
                Successful Google Business Profile Reinstatement Cases
              </h2>

              <div className="gmb-reinst-profile-swiper-wrapper">
                <GmbReinstProfileSwiper />
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

                <h3 className="gmb-reinst-price-heading"> Suspension Fix</h3>

                <p className="gmb-reinst-descrp">
                  For businesses that just need their listing back
                </p>

                <ul className="gmb-reinst-price-list">
                  <li>
                    <GoDotFill /> Full suspension audit
                  </li>
                  <li>
                    <GoDotFill /> Custom reinstatement appeal
                  </li>
                  <li>
                    <GoDotFill /> Documentation preparation
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
                  {" "}
                  Fix + Optimize ⭐ Most Popular
                </h3>

                <p className="gmb-reinst-descrp">
                  For businesses that want to come back stronger
                </p>

                <ul className="gmb-reinst-price-list">
                  <li>
                    <GoDotFill /> Everything in Suspension Fix
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
                  {" "}
                  Agency / Multi-Location
                </h3>

                <p className="gmb-reinst-descrp">
                  For agencies or businesses with multiple listings
                </p>

                <ul className="gmb-reinst-price-list">
                  <li>
                    <GoDotFill /> Everything in Fix + Optimize
                  </li>
                  <li>
                    <GoDotFill /> Multiple location handling
                  </li>
                  <li>
                    <GoDotFill /> Bulk reinstatement strategy
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
                  Don’t Let a Suspended Listing Cost You More Customers
                </h3>

                <HashScrollLink href="#gmb-reinst-top" className="buttons">
                  Get a Free Suspension Audit
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
                Real Businesses. Real Reinstatements.
              </h2>
            </div>

            <div className="gmb-reinst-testimonial-wrapper">
              <GmbReviews items={GmbReinstReviews} />
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
                Three guarantee pillars
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
                    If we can&apos;t get your listing reinstated, you pay
                    nothing. We only win when you win.
                    <Link href="/legal/refund-policy">
                      Visit our refund policy page.
                    </Link>
                  </p>
                </li>

                <li>
                  <h3>
                    <FaArrowRight />
                    No Long Waits
                  </h3>
                  <p>
                    Our average reinstatement time is 5–7 business days. We
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
                    — not a junior freelancer or an automated tool.
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
              <GmbFaqs items={GmbResinstFaqs} />
            </div>

            <Script
              id="gmb-reinst-faq-schema"
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: GmbResinstFaqs.map((faq) => ({
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
            leadFormTitle={GmbReinsFormHead.leadFormTitle}
            leadCallText={GmbReinsFormHead.leadCallText}
          />
        </div>
      </div>

      {/*gmb-reinst-banner-3*/}
      <div className="gmb-reinst-banner-3">
        <h2 className="gmb-reisnt-banner-3-heading">
          Back on Google. Back in Business.
        </h2>
        <p className="gmb-reisnt-banner-3-descrp">
          &quot;Every day your listing is suspended, customers are finding your
          competitors instead. We fix that — with a proven process, zero
          guesswork, and results that speak for themselves.&quot;
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
            Get a Free Suspension Audit
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
