"use client";

import "@/app/style/processSwiper.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

export type ProcessStepItem = {
  number?: string; // optional; if not provided we'll auto-generate 01,02...
  title: string;
  description: string;
  bullets?: string[];
};

export type ProcessSwiperData = {
  heading?: React.ReactNode;
  items: ProcessStepItem[];
};

type ProcessSwiperProps = {
  processData?: ProcessSwiperData;
  items?: ProcessStepItem[];
  heading?: React.ReactNode;
  autoplayDelay?: number;
};

const pad2 = (n: number) => String(n).padStart(2, "0");

export default function ProcessSwiper({
  processData,
  items,
  heading = (
    <>
      Our Proven 5-Step GMB Suspension <span> Recovery Process </span>
    </>
  ),
  autoplayDelay = 5500,
}: ProcessSwiperProps) {
  const resolvedItems = processData?.items ?? items ?? [];
  const resolvedHeading = processData?.heading ?? heading;

  return (
    <div className="process-swiper-wrapper">
      <h2 className="process-swiper-heading">{resolvedHeading}</h2>

      <div className="process-card-wrapper">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={false}
          autoplay={{
            delay: autoplayDelay,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1.8, spaceBetween: 10 },
            992: { slidesPerView: 2, spaceBetween: 10 },
            1025: { slidesPerView: 2.5, spaceBetween: 10 },
            1200: { slidesPerView: 3, spaceBetween: 10 },
            1500: { slidesPerView: 3.4, spaceBetween: 10 },
          }}
          modules={[Pagination, Autoplay]}
          className="processCardSwiper"
        >
          {resolvedItems.map((step, idx) => {
            const number = step.number ?? pad2(idx + 1);

            return (
              <SwiperSlide key={`${number}-${step.title}-${idx}`}>
                <div className="process-card-cont">
                  <p className="process-card-numbr">{number}</p>

                  <div className="process-card-content-cont">
                    <h3 className="process-card-heading">{step.title}</h3>

                    <p className="process-card-descrp">{step.description}</p>

                    {step.bullets?.length ? (
                      <ul className="process-card-list">
                        {step.bullets.map((item, i) => (
                          <li key={`${number}-bullet-${i}`}>{item}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
