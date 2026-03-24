// "use client";

// import "@/app/style/landingProcess.css";

// import { Swiper, SwiperSlide } from "swiper/react";
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// // import required modules
// import { Pagination, Autoplay } from "swiper/modules";

// function LandingProcess() {
//   return (
//     <>
//       <div className="landing-process-wrapper">
//         <Swiper
//           slidesPerView={1}
//           spaceBetween={10}
//           loop={false}
//           autoplay={{
//             delay: 2500,
//             disableOnInteraction: false,
//             pauseOnMouseEnter: true,
//           }}
//           pagination={{
//             clickable: true,
//           }}
//           breakpoints={{
//             640: {
//               slidesPerView: 1.8,
//               spaceBetween: 10,
//             },
//             992: {
//               slidesPerView: 2,
//               spaceBetween: 10,
//             },

//             1025: {
//               slidesPerView: 3,
//               spaceBetween: 10,
//             },

//             1200: {
//               slidesPerView: 2.5,
//               spaceBetween: 20,
//             },
//           }}
//           modules={[Pagination, Autoplay]}
//           className="LandingProcessSwiper"
//         >
//           <SwiperSlide>
//             <div className="landing-process-card">
//               <p className="landing-process-numb"> 1 </p>
//               <h3 className="landing-process-heading">Audit & Strategy</h3>
//               <p className="landing-process-content">
//                 We start by deeply analyzing your roofing business, local
//                 market, competitors, and current online presence. This helps us
//                 identify gaps, opportunities, and exactly what’s needed to
//                 generate more leads.
//               </p>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="landing-process-card">
//               <p className="landing-process-numb"> 1 </p>
//               <h3 className="landing-process-heading">Audit & Strategy</h3>
//               <p className="landing-process-content">
//                 We start by deeply analyzing your roofing business, local
//                 market, competitors, and current online presence. This helps us
//                 identify gaps, opportunities, and exactly what’s needed to
//                 generate more leads.
//               </p>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="landing-process-card">
//               <p className="landing-process-numb"> 1 </p>
//               <h3 className="landing-process-heading">Audit & Strategy</h3>
//               <p className="landing-process-content">
//                 We start by deeply analyzing your roofing business, local
//                 market, competitors, and current online presence. This helps us
//                 identify gaps, opportunities, and exactly what’s needed to
//                 generate more leads.
//               </p>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="landing-process-card">
//               <p className="landing-process-numb"> 1 </p>
//               <h3 className="landing-process-heading">Audit & Strategy</h3>
//               <p className="landing-process-content">
//                 We start by deeply analyzing your roofing business, local
//                 market, competitors, and current online presence. This helps us
//                 identify gaps, opportunities, and exactly what’s needed to
//                 generate more leads.
//               </p>
//             </div>
//           </SwiperSlide>
//         </Swiper>
//       </div>
//     </>
//   );
// }

// export default LandingProcess;

"use client";

import "@/app/style/landingProcess.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

type Step = {
  number: string;
  title: string;
  description: string;
};

type Props = {
  steps: Step[];
};

function LandingProcess({ steps }: Props) {
  return (
    <div className="landing-process-wrapper">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1.8,
            spaceBetween: 10,
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1025: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="LandingProcessSwiper"
      >
        {steps.map((step, index) => (
          <SwiperSlide key={index}>
            <div className="landing-process-card">
              <p className="landing-process-numb">{step.number}</p>
              <h3 className="landing-process-heading">{step.title}</h3>
              <p className="landing-process-content">{step.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default LandingProcess;
