"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

const sliderImages = [
  "/images/recent-work.jpeg",
  "/images/work-1.webp",
  "/images/work-2.webp",
  "/images/work-3.webp",
  "/images/work-4.webp",
];

export default function GmbReinstProfileSwiper() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={16}
      loop={false}
      autoplay={{
        delay: 8500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      pagination={{ clickable: true }}
      modules={[Pagination, Autoplay]}
      className="gmbReinstSwiper"
    >
      {sliderImages.map((src, index) => (
        <SwiperSlide key={`${src}-${index}`}>
          <div className="gmb-reinst-slide-card">
            <div className="gmb-reinst-slide-image">
              <Image
                src={src}
                fill
                sizes="(max-width: 768px) 100vw, 55vw"
                alt={`GMB reinstatement case ${index + 1}`}
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
