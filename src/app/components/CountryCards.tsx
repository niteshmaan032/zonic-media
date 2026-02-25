"use client";

import "@/app/style/countryCards.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

function CountryCards() {
  return (
    <>
      <div className="country-cards-wrapper">
        <h2 className="country-cards-heading">
          <span> Delivering excellence </span> across international markets
        </h2>
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
              spaceBetween: 20,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="CountryCardsSwiper"
        >
          <SwiperSlide>
            <div className="country-card-container dubai-card">
              <div className="country-card-img-cont">
                <Image src="/images/burj.png" fill alt="burj khalifa" />
              </div>

              <div className="country-card-content">
                <Image
                  src="/images/dubai-flag.png"
                  width={40}
                  height={40}
                  alt="dubai flag"
                ></Image>
                <div>
                  <h3 className="country-card-heading">
                    <span></span> Dubai
                  </h3>
                  <p className="country-card-descrp">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eaque quas veniam, pariatur voluptas facilis.
                  </p>
                  <Link href="#" className="buttons">
                    Know more
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
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="country-card-container usa-card">
              <div className="country-card-img-cont">
                <Image src="/images/liberty.png" fill alt="statue of liberty" />
              </div>

              <div className="country-card-content">
                <Image
                  src="/images/united-states.png"
                  width={40}
                  height={40}
                  alt="dubai flag"
                ></Image>
                <div>
                  <h3 className="country-card-heading">
                    <span></span> USA
                  </h3>
                  <p className="country-card-descrp">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eaque quas veniam, pariatur voluptas facilis.
                  </p>
                  <Link href="#" className="buttons">
                    Know more
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
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="country-card-container usa-card">
              <div className="country-card-img-cont">
                <Image
                  src="/images/cn-tower.png"
                  fill
                  alt="statue of liberty"
                />
              </div>

              <div className="country-card-content">
                <Image
                  src="/images/canada.png"
                  width={40}
                  height={40}
                  alt="dubai flag"
                ></Image>
                <div>
                  <h3 className="country-card-heading">
                    <span></span> Canada
                  </h3>
                  <p className="country-card-descrp">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eaque quas veniam, pariatur voluptas facilis.
                  </p>
                  <Link href="#" className="buttons">
                    Know more
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
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default CountryCards;
