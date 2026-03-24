// import "@/app/style/landingPage.css";
// import Link from "next/link";
// import { Row, Col } from "react-bootstrap";
// import Image from "next/image";
// import { FaArrowTrendUp, FaStar } from "react-icons/fa6";
// import { LuBadgeCheck } from "react-icons/lu";
// import { IoCallOutline } from "react-icons/io5";
// import LandingProcess from "@/app/components/LandingProcess";
// import { MdCenterFocusWeak } from "react-icons/md";
// import Testimonials from "@/app/components/Testimonials";
// import Faqs from "@/app/components/Faqs";
// import ContactForm from "@/app/components/ContactForm";
// import Footer from "@/app/components/Footer";

// function page() {
//   const WebContact = {
//     heading: "High-Converting Business Websites",
//     highlightedHeading: "",
//     points: [
//       "Modern, fast, and mobile-friendly website design",
//       "SEO-ready structure to help you rank on Google",
//       "Designed to convert visitors into leads and customers",
//     ],
//   };
//   const WebFaqs = [
//     {
//       question: "How long does it take to design and develop a website?",
//       answer:
//         "The timeline for website design and development typically ranges from 2 to 6 weeks, depending on the complexity of the project, number of pages, and required features.",
//     },
//     {
//       question: "Will my website be mobile-friendly and responsive?",
//       answer:
//         "Yes. Every website we build is fully mobile-responsive, ensuring it works seamlessly across desktops, tablets, and smartphones while providing an optimal user experience.",
//     },
//     {
//       question: "Do you build SEO-friendly websites?",
//       answer:
//         "Absolutely. Our websites are built with SEO best practices, including fast loading speeds, optimized structure, clean code, and proper heading hierarchy to help improve search engine visibility.",
//     },
//     {
//       question: "Can you redesign my existing website?",
//       answer:
//         "Yes. We offer website redesign services to improve design, performance, user experience, and search engine optimization while maintaining your brand identity.",
//     },
//     {
//       question: "What platforms do you use for website development?",
//       answer:
//         "We build websites using industry-leading platforms such as WordPress, Shopify, and custom development frameworks, depending on your business needs and goals.",
//     },
//   ];
//   return (
//     <>
//       <div
//         className="landing-hero-section"
//         style={{
//           backgroundImage: `url('/images/roofing-banner.png')`,
//         }}
//       >
//         <div className="landing-hero-section-content">
//           <h1 className="landing-hero-heading">
//             Scale Your Roofing Business with Results Driven Marketing
//           </h1>
//           <div className="landing-hero-descrip-container">
//             <p className="landing-hero-descrp">
//               Boost your roofing business with targeted SEO, ads, and proven
//               strategies that generate consistent leads, increase calls, and
//               grow revenue faster. Boost your roofing business with targeted
//               SEO, ads, and proven.
//             </p>
//             <Link href="/contact-us" className="buttons z-5">
//               Book a Strategy Call
//               <span className="buttons__icon-wrapper">
//                 <svg
//                   viewBox="0 0 14 15"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="buttons__icon-svg"
//                   width="8"
//                 >
//                   <path
//                     d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
//                     fill="currentColor"
//                   />
//                 </svg>
//                 <svg
//                   viewBox="0 0 14 15"
//                   fill="none"
//                   width="8"
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="buttons__icon-svg buttons__icon-svg--copy"
//                 >
//                   <path
//                     d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
//                     fill="currentColor"
//                   />
//                 </svg>
//               </span>
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/*content-wrapper-lading-page"*/}
//       <div className="content-wrapper-landing-page ">
//         {/*landing-page-section-2*/}
//         <div className="landing-section-2">
//           <Row className="m-0 justify-content-between">
//             <Col xs={12} lg={6} className="col-padding">
//               <div className="landing-sec-head-container">
//                 <p className="landing-sub-heading">Why local SEO</p>
//                 <h2 className="landing-section-heading">
//                   Why Local SEO Matters for Roofing Companies
//                 </h2>
//                 <p className="landing-head-descrp">
//                   Most homeowners search online when they need roofing services,
//                   often using terms like “roof repair near me” or “best roofing
//                   company nearby.” Local SEO ensures your business appears at
//                   the top of these searches.
//                 </p>

//                 <Link href="/contact-us" className="buttons">
//                   Book a Strategy Call
//                   <span className="buttons__icon-wrapper">
//                     <svg
//                       viewBox="0 0 14 15"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="buttons__icon-svg"
//                       width="8"
//                     >
//                       <path
//                         d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
//                         fill="currentColor"
//                       />
//                     </svg>
//                     <svg
//                       viewBox="0 0 14 15"
//                       fill="none"
//                       width="8"
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="buttons__icon-svg buttons__icon-svg--copy"
//                     >
//                       <path
//                         d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
//                         fill="currentColor"
//                       />
//                     </svg>
//                   </span>
//                 </Link>

//                 <div className="landing-sec2-img-cont">
//                   <Image src="/images/landing-seo.jpg" fill alt="google ads" />
//                 </div>
//               </div>
//             </Col>

//             <Col xs={12} lg={6} className="col-padding">
//               <div className="landing-sec2-content">
//                 <p>
//                   Most homeowners search online when they need roofing services,
//                   often using terms like “roof repair near me” or “best roofing
//                   company nearby.” Local SEO ensures your business appears at
//                   the top of these searches, putting you directly in front of
//                   high-intent customers who are ready to take action. Without
//                   it, you’re missing out on valuable leads every single day. A
//                   strong local SEO strategy helps your roofing business dominate
//                   your service area. By optimizing your Google Business Profile,
//                   website, and local listings, you increase your visibility,
//                   build trust, and stand out from competitors. This not only
//                   drives more traffic but also brings in higher-quality leads
//                   who are actively looking for your services.
//                 </p>
//                 <p>
//                   With consistent local visibility, your business gains a steady
//                   flow of calls, inquiries, and booked jobs. Instead of relying
//                   on referrals or unpredictable marketing, local SEO creates a
//                   reliable system that works for you 24/7—helping your roofing
//                   company grow faster and more sustainably. Beyond visibility,
//                   local SEO also strengthens your online reputation. Positive
//                   reviews, accurate business information, and engaging content
//                   build credibility and influence customer decisions. When
//                   potential clients see a well-optimized profile with strong
//                   ratings and recent activity, they are far more likely to
//                   choose your roofing services over competitors.
//                 </p>

//                 <p className="m-0">
//                   Mobile search plays a huge role in how customers find roofing
//                   companies today. Many users search for services while on the
//                   go, especially during emergencies like leaks or storm damage.
//                   A well-optimized local SEO strategy ensures your business
//                   shows up instantly on mobile devices, making it easy for
//                   customers to call or request a quote within seconds.
//                   Additionally, local SEO provides long-term value compared to
//                   paid advertising. While ads can stop generating leads once
//                   your budget runs out, organic local rankings continue to bring
//                   in traffic consistently. By investing in local SEO, you’re
//                   building a strong digital foundation that keeps delivering
//                   results and supports the long-term growth of your roofing
//                   business.
//                 </p>
//               </div>
//             </Col>
//           </Row>
//         </div>

//         {/*landing-page-section-3*/}
//         <div className="landing-section-3">
//           <Row className="m-0 justify-content-between landing-sec3-head-cont align-items-start ">
//             <Col xs={12} lg={6} className="col-padding">
//               <p className="landing-sub-heading">Growth & Result</p>
//               <h2 className="landing-section-heading">
//                 More Leads. More Calls. More Jobs.
//               </h2>
//             </Col>
//             <Col xs={12} lg={6} className="col-padding">
//               <p className="landing-head-descrp ">
//                 We follow a proven, step-by-step approach designed to
//                 consistently generate high-quality roofing leads, increase
//                 inbound calls, and turn prospects into paying customers. By
//                 combining strategic planning, targeted marketing, and continuous
//                 optimization.
//               </p>
//               <Link href="/contact-us" className="buttons">
//                 Book a Strategy Call
//                 <span className="buttons__icon-wrapper">
//                   <svg
//                     viewBox="0 0 14 15"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="buttons__icon-svg"
//                     width="8"
//                   >
//                     <path
//                       d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
//                       fill="currentColor"
//                     />
//                   </svg>
//                   <svg
//                     viewBox="0 0 14 15"
//                     fill="none"
//                     width="8"
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="buttons__icon-svg buttons__icon-svg--copy"
//                   >
//                     <path
//                       d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
//                       fill="currentColor"
//                     />
//                   </svg>
//                 </span>
//               </Link>
//             </Col>
//           </Row>

//           <Row className="m-0 landing-sec3-card-row">
//             <Col xs={12} lg={4} className="col-padding">
//               <div className="landing-sec3-card ">
//                 <FaArrowTrendUp />
//                 <h3 className="landing-sec3-card-heading">
//                   Consistent High-Quality Leads
//                 </h3>
//                 <p className="landing-sec3-card-content">
//                   We help you attract homeowners actively searching for roofing
//                   services, ensuring every lead has real potential to convert.
//                 </p>
//               </div>
//             </Col>

//             <Col xs={12} lg={4} className="col-padding">
//               <div className="landing-sec3-card">
//                 <LuBadgeCheck />

//                 <h3 className="landing-sec3-card-heading">
//                   Consistent High-Quality Leads
//                 </h3>
//                 <p className="landing-sec3-card-content">
//                   We help you attract homeowners actively searching for roofing
//                   services, ensuring every lead has real potential to convert.
//                 </p>
//               </div>
//             </Col>

//             <Col xs={12} lg={4} className="col-padding">
//               <div className="landing-sec3-card border-0 pe-0">
//                 <IoCallOutline />

//                 <h3 className="landing-sec3-card-heading">
//                   Consistent High-Quality Leads
//                 </h3>
//                 <p className="landing-sec3-card-content">
//                   We help you attract homeowners actively searching for roofing
//                   services, ensuring every lead has real potential to convert.
//                 </p>
//               </div>
//             </Col>
//           </Row>
//         </div>

//         {/*landing-page-section4*/}
//         <div className="landing-section-4">
//           <Row className="m-0 ">
//             <Col xs={12} lg={6} className="col-padding">
//               <h2 className="landing-section-heading">
//                 Consistent Growth: Scaling a Roofing Business with Zonic Media
//               </h2>
//               <p className="landing-head-descrp">
//                 Recognizing the lack of consistent leads and reliance on
//                 referrals, we partnered with a roofing company to build a
//                 predictable lead generation system using SEO and targeted ads.
//               </p>
//               <div className="landing-sec4-stats">
//                 <div className="landing-sec4-stats-card">
//                   <h3 className="landing-sec4-stats-numb">65%</h3>
//                   <p className="landing-sec4-stat-descrp">
//                     Increase in qualified roofing leads within the first 60
//                     days, bringing in more high-intent customers.
//                   </p>
//                 </div>
//                 <div className="landing-sec4-stats-card">
//                   <h3 className="landing-sec4-stats-numb">3X Growth</h3>
//                   <p className="landing-sec4-stat-descrp">
//                     Increase in qualified roofing leads within the first 60
//                     days, bringing in more high-intent customers.
//                   </p>
//                 </div>
//               </div>
//               <Link href="/contact-us" className="buttons">
//                 Book a Strategy Call
//                 <span className="buttons__icon-wrapper">
//                   <svg
//                     viewBox="0 0 14 15"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="buttons__icon-svg"
//                     width="8"
//                   >
//                     <path
//                       d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
//                       fill="currentColor"
//                     />
//                   </svg>
//                   <svg
//                     viewBox="0 0 14 15"
//                     fill="none"
//                     width="8"
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="buttons__icon-svg buttons__icon-svg--copy"
//                   >
//                     <path
//                       d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
//                       fill="currentColor"
//                     />
//                   </svg>
//                 </span>
//               </Link>
//             </Col>

//             <Col xs={12} lg={6} className="col-padding">
//               <div className="landing-sec4-img-cont">
//                 <Image src="/images/landing-seo2.png" fill alt="seo" />
//               </div>
//             </Col>
//           </Row>
//         </div>

//         {/*lading-page-section5*/}
//         <div className="landing-section-5">
//           <Row className="m-0 justify-content-between  ">
//             <Col xs={12} lg={6} className="col-padding">
//               <p className="landing-sub-heading">Our Process</p>
//               <h2 className="landing-section-heading">
//                 Our Simple Steps for Growth Process
//               </h2>
//             </Col>
//             <Col xs={12} lg={6} className="col-padding">
//               <p className="landing-head-descrp ">
//                 We follow a proven, step-by-step approach designed to
//                 consistently generate high-quality roofing leads, increase
//                 inbound calls, and turn prospects into paying customers. By
//                 combining strategic planning, targeted marketing, and continuous
//                 optimization.
//               </p>
//               <Link href="/contact-us" className="buttons">
//                 Book a Strategy Call
//                 <span className="buttons__icon-wrapper">
//                   <svg
//                     viewBox="0 0 14 15"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="buttons__icon-svg"
//                     width="8"
//                   >
//                     <path
//                       d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
//                       fill="currentColor"
//                     />
//                   </svg>
//                   <svg
//                     viewBox="0 0 14 15"
//                     fill="none"
//                     width="8"
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="buttons__icon-svg buttons__icon-svg--copy"
//                   >
//                     <path
//                       d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
//                       fill="currentColor"
//                     />
//                   </svg>
//                 </span>
//               </Link>
//             </Col>
//           </Row>

//           <LandingProcess />
//         </div>

//         {/*landing-page-section6*/}
//         <div className="landing-section-6">
//           <Row className="m-0 justify-content-between">
//             <Col xs={12} lg={5} className="col-padding">
//               <div className="landing-sec-head-container">
//                 <p className="landing-sub-heading">Why local SEO</p>
//                 <h2 className="landing-section-heading">
//                   Why Local SEO Matters for Roofing Companies
//                 </h2>
//                 <p className="landing-head-descrp">
//                   Most homeowners search online when they need roofing services,
//                   often using terms like “roof repair near me” or “best roofing
//                   company nearby.” Local SEO ensures your business appears at
//                   the top of these searches. Most homeowners search online when
//                   they need roofing.
//                 </p>

//                 <Link href="/contact-us" className="buttons">
//                   Book a Strategy Call
//                   <span className="buttons__icon-wrapper">
//                     <svg
//                       viewBox="0 0 14 15"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="buttons__icon-svg"
//                       width="8"
//                     >
//                       <path
//                         d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
//                         fill="currentColor"
//                       />
//                     </svg>
//                     <svg
//                       viewBox="0 0 14 15"
//                       fill="none"
//                       width="8"
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="buttons__icon-svg buttons__icon-svg--copy"
//                     >
//                       <path
//                         d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
//                         fill="currentColor"
//                       />
//                     </svg>
//                   </span>
//                 </Link>
//               </div>
//             </Col>

//             <Col xs={12} lg={7} className="col-padding">
//               <div className="landing-sec6-cards-wrapper">
//                 <div className="landing-sec6-card-row-1">
//                   <div className="landing-sec6-card">
//                     <MdCenterFocusWeak />

//                     <h3 className="landing-sec6-card-heading">hello world</h3>
//                     <p className="landing-sec6-card-cont">
//                       {" "}
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Nam sint quod accusamus veritatis sapiente aperiam
//                       doloribus quo non! Ipsam sunt ex tenetur, ipsa mollitia
//                       libero nulla debitis sapiente quia veniam.
//                     </p>
//                   </div>

//                   <div className="landing-sec6-card">
//                     <MdCenterFocusWeak />

//                     <h3 className="landing-sec6-card-heading">
//                       Proven Lead Generation System
//                     </h3>
//                     <p className="landing-sec6-card-cont">
//                       {" "}
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Nam sint quod accusamus veritatis sapiente aperiam
//                       doloribus quo non! Ipsam sunt ex tenetur, ipsa mollitia
//                       libero nulla debitis sapiente quia veniam.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="landing-sec6-card-row-1">
//                   <div className="landing-sec6-card">
//                     <MdCenterFocusWeak />

//                     <h3 className="landing-sec6-card-heading">hello world</h3>
//                     <p className="landing-sec6-card-cont">
//                       {" "}
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Nam sint quod accusamus veritatis sapiente aperiam
//                       doloribus quo non! Ipsam sunt ex tenetur, ipsa mollitia
//                       libero nulla debitis sapiente quia veniam.
//                     </p>
//                   </div>
//                   <div className="landing-sec6-card">
//                     <MdCenterFocusWeak />

//                     <h3 className="landing-sec6-card-heading">hello world</h3>
//                     <p className="landing-sec6-card-cont">
//                       {" "}
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Nam sint quod accusamus veritatis sapiente aperiam
//                       doloribus quo non! Ipsam sunt ex tenetur, ipsa mollitia
//                       libero nulla debitis sapiente quia veniam.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </div>

//         {/*landing-page-section7*/}
//         <div className="landing-section-7">
//           <Row className="m-0 justify-content-between">
//             <Col xs={12} lg={6} className="col-padding">
//               <div className="landing-sec-head-container ">
//                 <p className="landing-sub-heading">why Zonic Media</p>
//                 <h2 className="landing-section-heading">
//                   Why Zonic Media Beats Other Roofing Marketing Agencies
//                 </h2>
//                 <p className="landing-head-descrp">
//                   We deliver real roofing leads, transparent strategies,
//                   consistent results, and long-term growth—unlike generic
//                   agencies focused only on traffic and empty promises.We deliver
//                   real roofing leads, transparent strategies, consistent
//                   results, and long-term growth—unlike generic agencies focused
//                   only on traffic and empty promises.
//                 </p>

//                 <Link href="/contact-us" className="buttons">
//                   Book a Strategy Call
//                   <span className="buttons__icon-wrapper">
//                     <svg
//                       viewBox="0 0 14 15"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="buttons__icon-svg"
//                       width="8"
//                     >
//                       <path
//                         d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
//                         fill="currentColor"
//                       />
//                     </svg>
//                     <svg
//                       viewBox="0 0 14 15"
//                       fill="none"
//                       width="8"
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="buttons__icon-svg buttons__icon-svg--copy"
//                     >
//                       <path
//                         d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
//                         fill="currentColor"
//                       />
//                     </svg>
//                   </span>
//                 </Link>
//               </div>
//             </Col>

//             <Col xs={12} lg={6} className="col-padding">
//               <div className="landing-sec2-content ">
//                 <p>
//                   Most homeowners search online when they need roofing services,
//                   often using terms like “roof repair near me” or “best roofing
//                   company nearby.” Local SEO ensures your business appears at
//                   the top of these searches, putting you directly in front of
//                   high-intent customers who are ready to take action. Without
//                   it, you’re missing out on valuable leads every single day. A
//                   strong local SEO strategy helps your roofing business dominate
//                   your service area. By optimizing your Google Business Profile,
//                   website, and local listings, you increase your visibility,
//                   build trust, and stand out from competitors. This not only
//                   drives more traffic but also brings in higher-quality leads
//                   who are actively looking for your services.
//                 </p>
//                 <p>
//                   With consistent local visibility, your business gains a steady
//                   flow of calls, inquiries, and booked jobs. Instead of relying
//                   on referrals or unpredictable marketing, local SEO creates a
//                   reliable system that works for you 24/7—helping your roofing
//                   company grow faster and more sustainably. Beyond visibility,
//                   local SEO also strengthens your online reputation. Positive
//                   reviews, accurate business information, and engaging content
//                   build credibility and influence customer decisions. When
//                   potential clients see a well-optimized profile with strong
//                   ratings and recent activity, they are far more likely to
//                   choose your roofing services over competitors.
//                 </p>
//               </div>
//             </Col>
//           </Row>
//         </div>

//         {/*landing-page-section-services*/}
//         <div className="landing-section-10">
//           <Row className="m-0 justify-content-between landing-sec3-head-cont align-items-start">
//             <Col xs={12} lg={6} className="col-padding">
//               <h2 className="landing-section-heading">
//                 Our Digital Marketing Services
//               </h2>
//             </Col>

//             <div className="landing-service-wrapper">
//               <Row className="landing-service-row">
//                 <Col xs={12} lg={6} className="col-padding">
//                   <p className="landing-service-numb">
//                     <span> 1 </span> UI/UX Design
//                   </p>
//                 </Col>
//                 <Col xs={12} lg={6} className="col-padding">
//                   <p className="landing-service-cont">
//                     Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//                     Recusandae vel voluptas laboriosam fugit repellat magni, ut
//                     molestias. A accusamus recusandae voluptatem sit possimus.
//                     Eaque eveniet dicta nostrum itaque inventore natus. Lorem,
//                   </p>
//                   <Link href="/service/web-desing">
//                     View Web Design Services
//                   </Link>
//                 </Col>
//               </Row>
//               <Row className="landing-service-row">
//                 <Col xs={12} lg={6} className="col-padding">
//                   <p className="landing-service-numb">
//                     <span> 2 </span> Local SEO
//                   </p>
//                 </Col>
//                 <Col xs={12} lg={6} className="col-padding">
//                   <p className="landing-service-cont">
//                     Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//                     Recusandae vel voluptas laboriosam fugit repellat magni, ut
//                     molestias. A accusamus recusandae voluptatem sit possimus.
//                     Eaque eveniet dicta nostrum itaque inventore natus. Lorem,
//                   </p>
//                   <Link href="/service/web-desing">
//                     View Web Design Services
//                   </Link>
//                 </Col>
//               </Row>
//               <Row className="landing-service-row">
//                 <Col xs={12} lg={6} className="col-padding">
//                   <p className="landing-service-numb">
//                     <span> 3 </span> Web Design
//                   </p>
//                 </Col>
//                 <Col xs={12} lg={6} className="col-padding">
//                   <p className="landing-service-cont">
//                     Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//                     Recusandae vel voluptas laboriosam fugit repellat magni, ut
//                     molestias. A accusamus recusandae voluptatem sit possimus.
//                     Eaque eveniet dicta nostrum itaque inventore natus. Lorem,
//                   </p>
//                   <Link href="/service/web-desing">
//                     View Web Design Services
//                   </Link>
//                 </Col>
//               </Row>
//               <Row className="landing-service-row">
//                 <Col xs={12} lg={6} className="col-padding">
//                   <p className="landing-service-numb">
//                     <span> 4 </span> Google ADs
//                   </p>
//                 </Col>
//                 <Col xs={12} lg={6} className="col-padding">
//                   <p className="landing-service-cont">
//                     Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//                     Recusandae vel voluptas laboriosam fugit repellat magni, ut
//                     molestias. A accusamus recusandae voluptatem sit possimus.
//                     Eaque eveniet dicta nostrum itaque inventore natus. Lorem,
//                   </p>
//                   <Link href="/service/web-desing">
//                     View Web Design Services
//                   </Link>
//                 </Col>
//               </Row>
//             </div>
//           </Row>
//         </div>

//         {/*landing-page-section-8*/}
//         <div className="landing-section-8">
//           <h2 className="testimonial-heading">
//             Hear what our clients say about
//             <span> working with Zonic Media.</span>
//           </h2>
//           <Testimonials />
//         </div>

//         {/*landing-page-section9*/}
//         <div className="landing-section-9">
//           <Faqs items={WebFaqs} />
//         </div>

//         <ContactForm content={WebContact} />

//         <Footer />
//       </div>
//     </>
//   );
// }

// export default page;

import "@/app/style/landingPage.css";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import { FaArrowTrendUp } from "react-icons/fa6";
import { LuBadgeCheck } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import { MdCenterFocusWeak } from "react-icons/md";

import Testimonials from "@/app/components/Testimonials";
import Faqs from "@/app/components/Faqs";
import ContactForm from "@/app/components/ContactForm";
import Footer from "@/app/components/Footer";
import { landingPages } from "@/shared/landing-pages";
import LandingProcess from "@/app/components/LandingProcess";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function ArrowIcon() {
  return (
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
  );
}

function CTAButton({
  href,
  text,
  className = "buttons",
}: {
  href: string;
  text: string;
  className?: string;
}) {
  return (
    <Link href={href} className={className}>
      {text}
      <ArrowIcon />
    </Link>
  );
}

function getCardIcon(icon: string) {
  switch (icon) {
    case "trendUp":
      return <FaArrowTrendUp />;
    case "badgeCheck":
      return <LuBadgeCheck />;
    case "call":
      return <IoCallOutline />;
    default:
      return <FaArrowTrendUp />;
  }
}

export async function generateStaticParams() {
  return Object.keys(landingPages).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pageData = landingPages[slug as keyof typeof landingPages];

  if (!pageData) {
    return {
      title: "Page Not Found",
      description: "The requested page could not be found.",
    };
  }

  return {
    title: pageData.meta.title,
    description: pageData.meta.description,
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const pageData = landingPages[slug as keyof typeof landingPages];

  if (!pageData) {
    notFound();
  }

  const WebContact = pageData.contact;
  const WebFaqs = pageData.faqs;

  return (
    <>
      <div
        className="landing-hero-section"
        style={{
          backgroundImage: `url('${pageData.hero.backgroundImage}')`,
        }}
      >
        <div className="landing-hero-section-content">
          <h1 className="landing-hero-heading">{pageData.hero.heading}</h1>
          <div className="landing-hero-descrip-container">
            <p className="landing-hero-descrp">{pageData.hero.description}</p>
            <CTAButton
              href={pageData.hero.ctaLink}
              text={pageData.hero.ctaText}
              className="buttons z-5"
            />
          </div>
        </div>
      </div>

      <div className="content-wrapper-landing-page">
        <div className="landing-section-2">
          <Row className="m-0 justify-content-between">
            <Col xs={12} lg={6} className="col-padding">
              <div className="landing-sec-head-container">
                <p className="landing-sub-heading">
                  {pageData.section2.subHeading}
                </p>
                <h2 className="landing-section-heading">
                  {pageData.section2.heading}
                </h2>
                <p className="landing-head-descrp">
                  {pageData.section2.shortDescription}
                </p>

                <CTAButton
                  href={pageData.section2.ctaLink}
                  text={pageData.section2.ctaText}
                />

                <div className="landing-sec2-img-cont">
                  <Image
                    src={pageData.section2.image}
                    fill
                    alt={pageData.section2.imageAlt}
                  />
                </div>
              </div>
            </Col>

            <Col xs={12} lg={6} className="col-padding">
              <div className="landing-sec2-content">
                {pageData.section2.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className={
                      index === pageData.section2.paragraphs.length - 1
                        ? "m-0"
                        : ""
                    }
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Col>
          </Row>
        </div>

        <div className="landing-section-3">
          <Row className="m-0 justify-content-between landing-sec3-head-cont align-items-start">
            <Col xs={12} lg={6} className="col-padding">
              <p className="landing-sub-heading">
                {pageData.section3.subHeading}
              </p>
              <h2 className="landing-section-heading">
                {pageData.section3.heading}
              </h2>
            </Col>
            <Col xs={12} lg={6} className="col-padding">
              <p className="landing-head-descrp">
                {pageData.section3.description}
              </p>
              <CTAButton
                href={pageData.section3.ctaLink}
                text={pageData.section3.ctaText}
              />
            </Col>
          </Row>

          <Row className="m-0 landing-sec3-card-row">
            {pageData.section3.cards.map((card, index) => (
              <Col xs={12} lg={4} className="col-padding" key={index}>
                <div
                  className={`landing-sec3-card ${
                    index === pageData.section3.cards.length - 1
                      ? "border-0 pe-0"
                      : ""
                  }`}
                >
                  {getCardIcon(card.icon)}
                  <h3 className="landing-sec3-card-heading">{card.title}</h3>
                  <p className="landing-sec3-card-content">
                    {card.description}
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        <div className="landing-section-4">
          <Row className="m-0">
            <Col xs={12} lg={6} className="col-padding">
              <h2 className="landing-section-heading">
                {pageData.section4.heading}
              </h2>
              <p className="landing-head-descrp">
                {pageData.section4.description}
              </p>
              <div className="landing-sec4-stats">
                {pageData.section4.stats.map((stat, index) => (
                  <div className="landing-sec4-stats-card" key={index}>
                    <h3 className="landing-sec4-stats-numb">{stat.number}</h3>
                    <p className="landing-sec4-stat-descrp">
                      {stat.description}
                    </p>
                  </div>
                ))}
              </div>
              <CTAButton
                href={pageData.section4.ctaLink}
                text={pageData.section4.ctaText}
              />
            </Col>

            <Col xs={12} lg={6} className="col-padding">
              <div className="landing-sec4-img-cont">
                <Image
                  src={pageData.section4.image}
                  fill
                  alt={pageData.section4.imageAlt}
                />
              </div>
            </Col>
          </Row>
        </div>

        <div className="landing-section-5">
          {/* TOP CONTENT */}
          <Row className="m-0 justify-content-between">
            <Col xs={12} lg={6} className="col-padding">
              <p className="landing-sub-heading">
                {pageData.section5.subHeading}
              </p>
              <h2 className="landing-section-heading">
                {pageData.section5.heading}
              </h2>
            </Col>

            <Col xs={12} lg={6} className="col-padding">
              <p className="landing-head-descrp">
                {pageData.section5.description}
              </p>
              <CTAButton
                href={pageData.hero.ctaLink}
                text={pageData.hero.ctaText}
              />
            </Col>
          </Row>

          {/* ✅ SWIPER (THIS IS YOUR DESIGN) */}
          <LandingProcess steps={pageData.section5.steps} />
        </div>

        <div className="landing-section-6">
          <Row className="m-0 justify-content-between">
            <Col xs={12} lg={5} className="col-padding">
              <div className="landing-sec-head-container">
                <p className="landing-sub-heading">
                  {pageData.section6.subHeading}
                </p>
                <h2 className="landing-section-heading">
                  {pageData.section6.heading}
                </h2>
                <p className="landing-head-descrp">
                  {pageData.section6.description}
                </p>

                <CTAButton
                  href={pageData.section6.ctaLink}
                  text={pageData.section6.ctaText}
                />
              </div>
            </Col>

            <Col xs={12} lg={7} className="col-padding">
              <div className="landing-sec6-cards-wrapper">
                <div className="landing-sec6-card-row-1">
                  {pageData.section6.cards.slice(0, 2).map((card, index) => (
                    <div className="landing-sec6-card" key={index}>
                      <MdCenterFocusWeak />
                      <h3 className="landing-sec6-card-heading">
                        {card.title}
                      </h3>
                      <p className="landing-sec6-card-cont">
                        {card.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="landing-sec6-card-row-1">
                  {pageData.section6.cards.slice(2, 4).map((card, index) => (
                    <div className="landing-sec6-card" key={index}>
                      <MdCenterFocusWeak />
                      <h3 className="landing-sec6-card-heading">
                        {card.title}
                      </h3>
                      <p className="landing-sec6-card-cont">
                        {card.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div className="landing-section-7">
          <Row className="m-0 justify-content-between">
            <Col xs={12} lg={6} className="col-padding">
              <div className="landing-sec-head-container">
                <p className="landing-sub-heading">
                  {pageData.section7.subHeading}
                </p>
                <h2 className="landing-section-heading">
                  {pageData.section7.heading}
                </h2>
                <p className="landing-head-descrp">
                  {pageData.section7.description}
                </p>

                <CTAButton
                  href={pageData.section7.ctaLink}
                  text={pageData.section7.ctaText}
                />
              </div>
            </Col>

            <Col xs={12} lg={6} className="col-padding">
              <div className="landing-sec2-content">
                {pageData.section7.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </Col>
          </Row>
        </div>

        <div className="landing-section-10">
          <Row className="m-0 justify-content-between landing-sec3-head-cont align-items-start">
            <Col xs={12} lg={6} className="col-padding">
              <h2 className="landing-section-heading">
                {pageData.section10.heading}
              </h2>
            </Col>

            <div className="landing-service-wrapper">
              {pageData.section10.services.map((service, index) => (
                <Row className="landing-service-row" key={index}>
                  <Col xs={12} lg={6} className="col-padding">
                    <p className="landing-service-numb">
                      <span>{service.number}</span> {service.title}
                    </p>
                  </Col>
                  <Col xs={12} lg={6} className="col-padding">
                    <p className="landing-service-cont">
                      {service.description}
                    </p>
                    <Link href={service.link}>{service.linkText}</Link>
                  </Col>
                </Row>
              ))}
            </div>
          </Row>
        </div>

        <div className="landing-section-8">
          <h2 className="testimonial-heading">
            {pageData.testimonials.heading}
            <span>{pageData.testimonials.highlightedHeading}</span>
          </h2>
          <Testimonials />
        </div>

        <div className="landing-section-9">
          <Faqs items={WebFaqs} />
        </div>

        <ContactForm content={WebContact} />

        <Footer />
      </div>
    </>
  );
}
