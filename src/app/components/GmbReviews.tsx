"use client";

import { FaUserCircle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

type GmbReviewItem = {
  review: string;
  author: string;
  role: string;
};

type GmbReviewsProps = {
  items: GmbReviewItem[];
};

export default function GmbReviews({ items }: GmbReviewsProps) {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={16}
      loop={false}
      autoplay={{
        delay: 5500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      pagination={{ clickable: true }}
      modules={[Pagination, Autoplay]}
      className="gmbReinstReviewSwiper"
    >
      {items.map((slide, index) => (
        <SwiperSlide key={`${slide.author}-${index}`}>
          <div className="gmb-reinst-testi-content">
            <p className="gmb-reinst-review">{slide.review}</p>

            <div className="gmb-reinst-test-author">
              <FaUserCircle />
              <p className="gmb-reinst-author-name">
                {slide.author} <br />
                <span>{slide.role}</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
