"use client";

import "../style/processSwiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
function ProcessSwiper() {
  return (
    <>
      <div className="process-swiper-wrapper">
        <h2 className="process-swiper-heading">
          Our Proven 5-Step GMB Suspension <span> Recovery Process </span>
        </h2>

        <div className="process-card-wrapper">
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
                slidesPerView: 3.5,
                spaceBetween: 10,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="processCardSwiper"
          >
            <SwiperSlide>
              <div className="process-card-cont">
                <p className="process-card-numbr">01</p>

                <div className="process-card-content-cont">
                  <h3 className="process-card-heading"> In-Depth Audit </h3>

                  <p className="process-card-descrp">
                    We conduct a detailed analysis of your listing, guidelines,
                    history, and violations to accurately identify the root
                    cause of suspension.
                  </p>

                  <ul className="process-card-list">
                    <li> Policy Review</li>
                    <li> Listing Analysis </li>
                    <li> Violation Detection </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="process-card-cont">
                <p className="process-card-numbr">01</p>

                <div className="process-card-content-cont">
                  <h3 className="process-card-heading"> In-Depth Audit </h3>

                  <p className="process-card-descrp">
                    We conduct a detailed analysis of your listing, guidelines,
                    history, and violations to accurately identify the root
                    cause of suspension.
                  </p>

                  <ul className="process-card-list">
                    <li> Policy Review</li>
                    <li> Listing Analysis </li>
                    <li> Violation Detection </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="process-card-cont">
                <p className="process-card-numbr">01</p>

                <div className="process-card-content-cont">
                  <h3 className="process-card-heading"> In-Depth Audit </h3>

                  <p className="process-card-descrp">
                    We conduct a detailed analysis of your listing, guidelines,
                    history, and violations to accurately identify the root
                    cause of suspension.
                  </p>

                  <ul className="process-card-list">
                    <li> Policy Review</li>
                    <li> Listing Analysis </li>
                    <li> Violation Detection </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="process-card-cont">
                <p className="process-card-numbr">01</p>

                <div className="process-card-content-cont">
                  <h3 className="process-card-heading"> In-Depth Audit </h3>

                  <p className="process-card-descrp">
                    We conduct a detailed analysis of your listing, guidelines,
                    history, and violations to accurately identify the root
                    cause of suspension.
                  </p>

                  <ul className="process-card-list">
                    <li> Policy Review</li>
                    <li> Listing Analysis </li>
                    <li> Violation Detection </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="process-card-cont">
                <p className="process-card-numbr">01</p>

                <div className="process-card-content-cont">
                  <h3 className="process-card-heading"> In-Depth Audit </h3>

                  <p className="process-card-descrp">
                    We conduct a detailed analysis of your listing, guidelines,
                    history, and violations to accurately identify the root
                    cause of suspension.
                  </p>

                  <ul className="process-card-list">
                    <li> Policy Review</li>
                    <li> Listing Analysis </li>
                    <li> Violation Detection </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default ProcessSwiper;
