import GmbReinstReivew from "@/app/components/GmbReinstReivew";
import GmbReinstProfileSwiper from "@/app/components/GmbReinstProfileSwiper";
import "@/app/style/gmb-reinstatement.css";
import Image from "next/image";
import Link from "next/link";
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
import GmbReinstFaqs from "@/app/components/GmbReinstFaqs";
import Footer from "@/app/components/Footer";
import { MdLocalOffer } from "react-icons/md";
import { BsExclamationCircleFill, BsQuestionCircleFill } from "react-icons/bs";
import { HiMiniUserGroup } from "react-icons/hi2";
import { IoIosCloseCircle } from "react-icons/io";
import { AiFillStop } from "react-icons/ai";

function page() {
  return (
    <>
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
              Zonic Media provides professional Google Business Profile
              reinstatement services to help businesses recover suspended
              listings, resolve policy violations, and restore their online
              visibility quickly and safely.
            </p>

            <div className="gmb-reinst-sec-1-box">
              <p>
                <span>
                  <FaPhoneAlt />
                </span>
                Need Immediate GMB Help? Call Now!
              </p>

              <p>
                Connect with a Google My Business specialist for quick
                reactivation support. One call can help recover your lost
                business visibility.{" "}
                <Link href="tel:+13027269736"> Call Now:(302) 726-9736 </Link>
              </p>
            </div>

            <Link href="/contact-us" className="buttons">
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
            </Link>

            <div className="gmb-reinst-sec-1-stats">
              <p>
                <span> 2,500+ </span>
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
              2,500+ Listings Successfully Restored
            </p>
          </div>

          {/*gmb-reinst-section-3*/}
          <div className="gmb-reinst-sec-3 gmb-reinst-common-sec">
            <div className="gmb-reinst-common-sec-head">
              <p className="label-head">
                <FaCircleExclamation /> GMB Suspension Issues
              </p>

              <h2 className="gmb-reinst-sec-heading">
                What Causes Google Business Profile Suspensions?
              </h2>
              <p className="gmb-reinst-descrp">
                Google Business Profile listings can be suspended when they
                violate Google's guidelines or contain inconsistent business
                information. Based on Google's policies and common industry
                cases, some of the most frequent causes of suspension include:
              </p>
            </div>

            <div className="gmb-reinst-cards">
              <div className="gmb-reinst-card-wrapper">
                <p className="gmb-reinst-card-icon">
                  <FaLocationDot />
                </p>

                <h3 className="gmb-reinst-card-heading">
                  Address & Location Problems
                </h3>
                <p className="gmb-reinst-card-descrp">
                  Listings using virtual offices, P.O. boxes, or inconsistent
                  address details often get suspended. We help correct and
                  verify your location.
                </p>
              </div>

              <div className="gmb-reinst-card-wrapper">
                <p className="gmb-reinst-card-icon">
                  <FaTriangleExclamation />
                </p>

                <h3 className="gmb-reinst-card-heading">
                  Address & Location Problems
                </h3>
                <p className="gmb-reinst-card-descrp">
                  Listings using virtual offices, P.O. boxes, or inconsistent
                  address details often get suspended. We help correct and
                  verify your location.
                </p>
              </div>

              <div className="gmb-reinst-card-wrapper">
                <p className="gmb-reinst-card-icon">
                  <BsExclamationCircleFill />
                </p>

                <h3 className="gmb-reinst-card-heading">
                  Address & Location Problems
                </h3>
                <p className="gmb-reinst-card-descrp">
                  Listings using virtual offices, P.O. boxes, or inconsistent
                  address details often get suspended. We help correct and
                  verify your location.
                </p>
              </div>

              <div className="gmb-reinst-card-wrapper">
                <p className="gmb-reinst-card-icon">
                  <HiMiniUserGroup />
                </p>

                <h3 className="gmb-reinst-card-heading">
                  Address & Location Problems
                </h3>
                <p className="gmb-reinst-card-descrp">
                  Listings using virtual offices, P.O. boxes, or inconsistent
                  address details often get suspended. We help correct and
                  verify your location.
                </p>
              </div>

              <div className="gmb-reinst-card-wrapper">
                <p className="gmb-reinst-card-icon">
                  <IoIosCloseCircle />
                </p>

                <h3 className="gmb-reinst-card-heading">
                  Address & Location Problems
                </h3>
                <p className="gmb-reinst-card-descrp">
                  Listings using virtual offices, P.O. boxes, or inconsistent
                  address details often get suspended. We help correct and
                  verify your location.
                </p>
              </div>

              <div className="gmb-reinst-card-wrapper">
                <p className="gmb-reinst-card-icon">
                  <AiFillStop />
                </p>

                <h3 className="gmb-reinst-card-heading">
                  Address & Location Problems
                </h3>
                <p className="gmb-reinst-card-descrp">
                  Listings using virtual offices, P.O. boxes, or inconsistent
                  address details often get suspended. We help correct and
                  verify your location.
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
                violate Google's guidelines or contain inconsistent business
                information. Based on Google's policies and common industry
                cases, some of the most frequent causes of suspension include:
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
                Your profile can be restored quickly. Start with a free review
                today.
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
                <Link href="/contact-us" className="buttons">
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
                </Link>
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
                <FaUserAlt /> GMB Suspension Issues
              </p>

              <h2 className="gmb-reinst-sec-heading">
                What Causes Google Business Profile Suspensions?
              </h2>
              <p className="gmb-reinst-descrp">
                Google Business Profile listings can be suspended when they
                violate Google's guidelines or contain inconsistent business
                information. Based on Google's policies and common industry
                cases, some of the most frequent causes of suspension include:
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
                  Address & Location Problems
                </h3>
                <p className="gmb-reinst-card-descrp">
                  Listings using virtual offices, P.O. boxes, or inconsistent
                  address details often get suspended. We help correct and
                  verify your location.
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
                  Address & Location Problems
                </h3>
                <p className="gmb-reinst-card-descrp">
                  Listings using virtual offices, P.O. boxes, or inconsistent
                  address details often get suspended. We help correct and
                  verify your location.
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
                  Address & Location Problems
                </h3>
                <p className="gmb-reinst-card-descrp">
                  Listings using virtual offices, P.O. boxes, or inconsistent
                  address details often get suspended. We help correct and
                  verify your location.
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
                  Address & Location Problems
                </h3>
                <p className="gmb-reinst-card-descrp">
                  Listings using virtual offices, P.O. boxes, or inconsistent
                  address details often get suspended. We help correct and
                  verify your location.
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
                  <li>
                    <GoDotFill /> CTA: Start Reinstatement
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
                  <li>
                    <GoDotFill /> CTA: Get Started Today
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
                  <li>
                    <GoDotFill /> CTA: Contact for Pricing
                  </li>
                </ul>
              </div>

              <div className="gmb-reinst-price-card-wrapper gmb-reinst-price-banner">
                <h3 className="gmb-reinst-price-banner-heading">
                  Don’t Let a Suspended Listing Cost You More Customers
                </h3>

                <Link href="/contact-us" className="buttons">
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
                </Link>
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
              <GmbReinstReivew />
            </div>
          </div>

          {/*gmb-reinst-section-8*/}
          <div className="gmb-reinst-sec-8 gmb-reinst-common-sec">
            <div className="gmb-reinst-common-sec-head">
              <p className="label-head">
                {" "}
                <FaBoltLightning />
                We're So Confident, We Back It Up
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
                    If we can't get your listing reinstated, you pay nothing. We
                    only win when you win.
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
                    follow up aggressively so Google doesn't leave your case
                    idle.
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
              <GmbReinstFaqs />
            </div>
          </div>
        </div>

        {/*gmb-reinst-contact-form-wrapper right-content*/}
        <div className="gmb-reinst-contact-form">
          <LeadContactForm />
        </div>
      </div>

      {/*gmb-reinst-banner-3*/}
      <div className="gmb-reinst-banner-3">
        <h2 className="gmb-reisnt-banner-3-heading">
          Back on Google. Back in Business.
        </h2>
        <p className="gmb-reisnt-banner-3-descrp">
          "Every day your listing is suspended, customers are finding your
          competitors instead. We fix that — with a proven process, zero
          guesswork, and results that speak for themselves."
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

          <Link href="/contact-us" className="buttons">
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
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default page;
