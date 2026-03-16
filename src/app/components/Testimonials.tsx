"use client";

import "@/app/style/testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaUserCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

function Testimonials() {
  return (
    <>
      <div className="testimonials-wrapper">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={false}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          //   pauseOnMouseEnter: true,
          // }}
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
          className="testimonialSwiper"
        >
          <SwiperSlide>
            <div className="testimonial-rating-card">
              <p className="testimonial-rating-number">4.8</p>
              <div className="testimonial-rating-stars">
                <FaStar size={24} />
                <FaStar size={24} />
                <FaStar size={24} />
                <FaStar size={24} />
                <FaStar size={24} />
              </div>
              <p className="testimonial-rating-text"> reviews</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-card-wrapper">
              <p className="testimonial-agency-name"> CEO, MXD Marketing </p>
              <blockquote className="testimonial-text">
                "Zonic Media fulfilled what previous consultants had promised."
              </blockquote>
              <cite className="testimonial-author">
                <FaUserCircle />
                Randy Roberts
              </cite>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-card-wrapper">
              <p className="testimonial-agency-name"> CMO, Digital Toolbag </p>
              <blockquote className="testimonial-text">
                "Their knowledge of the different types of Google campaigns is
                great."
              </blockquote>
              <cite className="testimonial-author">
                <FaUserCircle />
                Tom LeeZmuda
              </cite>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-card-wrapper">
              <p className="testimonial-agency-name">
                {" "}
                Executive, Peace of Mind{" "}
              </p>
              <blockquote className="testimonial-text">
                "They’ve taken the time to explain what they’re doing and why it
                matters for our online presence."
              </blockquote>
              <cite className="testimonial-author">
                <FaUserCircle />
                Anonymous
              </cite>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Testimonials;
