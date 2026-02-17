"use client";

import "../style/testimonials.css";
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
              <p className="testimonial-rating-text"> 200+ reviews</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-card-wrapper">
              <p className="testimonial-agency-name"> NY Roofing </p>
              <blockquote className="testimonial-text">
                “Zonic Media delivered a modern, high-performing website that
                truly drives results.”
              </blockquote>
              <cite className="testimonial-author">
                <FaUserCircle />
                Nick Fisher
              </cite>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-card-wrapper">
              <p className="testimonial-agency-name"> Zonic Media </p>
              <blockquote className="testimonial-text">
                “Their digital strategy and ads generated quality leads and
                strong ROI.”
              </blockquote>
              <cite className="testimonial-author">
                <FaUserCircle />
                David Finch
              </cite>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-card-wrapper">
              <p className="testimonial-agency-name"> Digital Agency </p>
              <blockquote className="testimonial-text">
                “Great design, clear communication, and attention to every
                detail.”
              </blockquote>
              <cite className="testimonial-author">
                <FaUserCircle />
                Sam
              </cite>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Testimonials;
