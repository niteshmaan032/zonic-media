"use client";

import "@/app/style/Blogs.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import { SITE_PATHS } from "@/shared/siteConfig";

const blogs = [
  {
    slug: "law-firm-local-seo-growth",
    image: "/images/home-seo-2.webp",
    date: "March 12, 2026",
    title: "How Local SEO Helps Service Brands Win Nearby Searches",
    description:
      "A practical look at improving maps visibility, building trust fast, and turning local search traffic into qualified leads.",
  },
];

function Blogs() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  useEffect(() => {
    if (!swiper || !prevRef.current || !nextRef.current) {
      return;
    }

    if (
      swiper.params.navigation &&
      typeof swiper.params.navigation !== "boolean"
    ) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
    }

    swiper.navigation.destroy();
    swiper.navigation.init();
    swiper.navigation.update();
  }, [swiper]);

  return (
    <section className="blog-section">
      <div className="blog-section-header">
        <h2 className="blog-section-heading">
          Explore our <span>latest blogs</span>
        </h2>

        <div className="blog-swiper-nav">
          <button
            ref={prevRef}
            type="button"
            className="blog-swiper-button"
            aria-label="Previous blog"
          >
            <FaArrowLeftLong />
          </button>

          <button
            ref={nextRef}
            type="button"
            className="blog-swiper-button"
            aria-label="Next blog"
          >
            <FaArrowRightLong />
          </button>
        </div>
      </div>

      <Swiper
        navigation
        slidesPerView={1}
        spaceBetween={20}
        centeredSlides={false}
        watchOverflow
        breakpoints={{
          640: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
        onSwiper={setSwiper}
        modules={[Navigation]}
        className="blog-swiper"
      >
        {blogs.map((blog) => (
          <SwiperSlide key={blog.slug}>
            <article className="blog-card">
              <div className="blog-card-image-wrap">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                />
              </div>

              <div className="blog-card-body">
                <p className="blog-card-date">{blog.date}</p>
                <h3 className="blog-card-title">{blog.title}</h3>
                <p className="blog-card-description">{blog.description}</p>

                <Link href={SITE_PATHS.blogs} className="blog-card-link">
                  Continue Reading
                </Link>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Blogs;
