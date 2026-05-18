"use client";

import "@/app/style/Blogs.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  FaArrowLeftLong,
  FaArrowRightLong,
  FaCalendarDays,
  FaCircleUser,
} from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import { SITE_PATHS } from "@/shared/siteConfig";
import type { PublicBlog } from "@/backend/lib/blogs";

type BlogsProps = {
  blogs: PublicBlog[];
};

function formatBlogDate(value: string) {
  const date = new Date(`${value}T00:00:00`);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function Blogs({ blogs }: BlogsProps) {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const canNavigate = blogs.length > 1;

  if (blogs.length === 0) {
    return null;
  }

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

        <div className="blog-header-actions">
          <Link href={SITE_PATHS.blogs} className="blog-view-all-link">
            View All
          </Link>

          <div className="blog-swiper-nav">
            <button
              ref={prevRef}
              type="button"
              className="blog-swiper-button"
              aria-label="Previous blog"
              disabled={!canNavigate}
            >
              <FaArrowLeftLong />
            </button>

            <button
              ref={nextRef}
              type="button"
              className="blog-swiper-button"
              aria-label="Next blog"
              disabled={!canNavigate}
            >
              <FaArrowRightLong />
            </button>
          </div>
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
          <SwiperSlide key={blog.id}>
            <article className="blog-card">
              <div className="blog-card-image-wrap">
                <Image
                  src={blog.featuredImageUrl}
                  alt={blog.blogTitle}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                />
              </div>

              <div className="blog-card-body">
                <p className="blog-card-meta">
                  <span>
                    <FaCircleUser aria-hidden="true" />
                    {blog.authorName}
                  </span>
                  <span className="blog-card-meta-dot" aria-hidden="true" />
                  <span>
                    <FaCalendarDays aria-hidden="true" />
                    {formatBlogDate(blog.publishDate)}
                  </span>
                </p>
                <h3 className="blog-card-title">{blog.blogTitle}</h3>
                <p className="blog-card-description">{blog.excerpt}</p>

                <Link
                  href={`/blogs/${blog.slug}`}
                  className="blog-card-link"
                >
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
