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
  bullets?: string[];
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
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          575: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          992: {
            slidesPerView: 1.8,
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
        className="LandingProcessSwiper"
      >
        {steps.map((step, index) => (
          <SwiperSlide key={`${step.number}-${step.title}-${index}`}>
            <div className="landing-process-card">
              <p className="landing-process-numb">{step.number}</p>
              <h3 className="landing-process-heading">{step.title}</h3>
              <p className="landing-process-content">{step.description}</p>
              {step.bullets?.length ? (
                <ul className="landing-process-bullets">
                  {step.bullets.map((item, bulletIndex) => (
                    <li key={`${step.number}-bullet-${bulletIndex}`}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default LandingProcess;
