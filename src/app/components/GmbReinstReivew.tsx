"use client";

import { FaUserCircle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

const reviewSlides = [
  {
    review:
      '"Our restaurant was suspended for 3 weeks and we had no idea why. Zonic Media diagnosed the issue within hours and had us back on Google Maps in 6 days. The difference in walk-ins was immediate."',
    author: "Kim",
    role: "Restaurant Owner, Los Angeles",
  },
  {
    review:
      '"I tried to appeal myself twice and it made things worse. Zonic\'s team knew exactly what to say to Google. Reinstated in under a week. Highly recommend to any business owner."',
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
export default function GmbReinstReivew() {
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
      {reviewSlides.map((slide, index) => (
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
