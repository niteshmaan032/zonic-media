"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Keyboard } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight, FiCalendar, FiImage, FiUser } from "react-icons/fi";
import "swiper/css";
import { Label, Pill, RowHead, Strip } from "@/components/rd/dfw-kit/primitives";

/* Blog slider for /home2 (19–20 Oct 2026). Same posts, titles, excerpts and
   links as the live homepage slider (src/app/components/Blogs.tsx, left
   unchanged), redrawn as kit cards: white rounded card with a hairline
   border, inset photo with a date chip, author line, title, excerpt and a
   "Continue Reading" link with the circled arrow. Swiper: 1.1 / 2 / 3 cards
   with prev/next buttons and keyboard support. */

export type BlogSlide = {
  id: string;
  slug: string;
  blogTitle: string;
  authorName: string;
  publishDate: string;
  featuredImageUrl: string;
  excerpt: string;
};

function formatDate(value: string) {
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(date);
}

const NAV =
  "tw:grid tw:size-[54px] tw:place-items-center tw:rounded-full tw:border tw:border-[#d3dae6] tw:bg-white tw:text-[18px] tw:text-(--ink) tw:transition tw:duration-200 tw:enabled:cursor-pointer tw:enabled:hover:border-(--ink) tw:enabled:hover:bg-(--ink) tw:enabled:hover:text-white tw:disabled:opacity-40";

function BlogCard({ blog }: { blog: BlogSlide }) {
  const href = `/blog/${blog.slug}`;
  return (
    <article className="tw:group tw:relative tw:flex tw:h-full tw:flex-col tw:rounded-(--r-xl) tw:border tw:border-[#e6eaf1] tw:bg-white tw:p-3 tw:transition tw:duration-300 tw:hover:-translate-y-1 tw:hover:border-[#d3dae6]">
      <div className="tw:relative tw:h-[190px] tw:overflow-hidden tw:rounded-[28px] tw:bg-(--panel) tw:max-bssm:h-[170px] tw:max-bssm:rounded-[20px]">
        {blog.featuredImageUrl ? (
          <Image
            src={blog.featuredImageUrl}
            alt={blog.blogTitle}
            fill
            sizes="(max-width: 767px) 90vw, (max-width: 1099px) 50vw, 33vw"
            className="tw:object-cover tw:transition-transform tw:duration-500 tw:group-hover:scale-[1.04]"
          />
        ) : (
          <span className="tw:absolute tw:inset-0 tw:grid tw:place-items-center tw:text-3xl tw:text-[#a9b5c9]" aria-hidden="true">
            <FiImage />
          </span>
        )}
      </div>

      <div className="tw:flex tw:grow tw:flex-col tw:px-3 tw:pt-4 tw:pb-2">
        {/* Author and date (the date moved off the photo: blog images carry
            their own headline at the top, so a chip there covered it). */}
        <span className="tw:flex tw:min-w-0 tw:flex-nowrap tw:items-center tw:gap-x-3 tw:text-[13.5px] tw:font-medium tw:whitespace-nowrap tw:text-(--ink-2) tw:max-bssm:gap-x-2 tw:max-bssm:text-[13px]">
          <span className="tw:flex tw:min-w-0 tw:items-center tw:gap-1.5">
            <span className="tw:grid tw:size-7 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-(--blue-soft) tw:text-[13px] tw:text-(--blue) tw:max-bssm:size-6" aria-hidden="true">
              <FiUser />
            </span>
            <span className="tw:truncate">{blog.authorName}</span>
          </span>
          <span className="tw:flex tw:flex-none tw:items-center tw:gap-1.5">
            <span className="tw:grid tw:size-7 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-(--gold-soft) tw:text-[13px] tw:text-[#8a6400] tw:max-bssm:size-6" aria-hidden="true">
              <FiCalendar />
            </span>
            {formatDate(blog.publishDate)}
          </span>
        </span>
        <h3 className="tw:mt-2.5 tw:line-clamp-2 tw:text-[20px] tw:leading-[1.25] tw:tracking-[-0.02em] tw:text-balance tw:max-bssm:text-[18px]">
          {/* Stretched link: the whole card opens the post. */}
          <Link
            href={href}
            className="tw:after:absolute tw:after:inset-0 tw:after:rounded-(--r-xl) tw:after:content-[''] tw:focus-visible:outline-none tw:focus-visible:after:outline-2 tw:focus-visible:after:outline-(--blue)"
          >
            {blog.blogTitle}
          </Link>
        </h3>
        <p className="tw:mt-2 tw:line-clamp-2 tw:text-[15px]/[1.6] tw:text-(--text)">{blog.excerpt}</p>
        <span className="tw:mt-auto tw:inline-flex tw:items-center tw:gap-3 tw:pt-4 tw:text-[15px] tw:font-semibold tw:text-(--ink)" aria-hidden="true">
          Continue Reading
          <span className="tw:grid tw:size-9 tw:place-items-center tw:rounded-full tw:bg-(--blue-soft) tw:text-(--blue) tw:transition tw:duration-200 tw:group-hover:rotate-45 tw:group-hover:bg-(--gold) tw:group-hover:text-(--ink)">
            <FiArrowUpRight />
          </span>
        </span>
      </div>
    </article>
  );
}

export function HomeBlogSlider({ blogs }: { blogs: BlogSlide[] }) {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [edges, setEdges] = useState({ start: true, end: blogs.length <= 1 });
  const sync = (s: SwiperType) => setEdges({ start: s.isBeginning, end: s.isEnd });

  if (!blogs.length) return null;

  return (
    <>
      <RowHead align="start">
        <div>
          <Label>From the blog</Label>
          <Strip id="home-blog-h" size="card">
            Explore Our Latest Blogs
          </Strip>
        </div>
        <div className="tw:flex tw:items-center tw:gap-3">
          <button type="button" className={`${NAV} tw:max-bsmd:hidden`} aria-label="Previous blog" disabled={edges.start} onClick={() => swiper?.slidePrev()}>
            <FiArrowLeft aria-hidden="true" />
          </button>
          <button type="button" className={`${NAV} tw:max-bsmd:hidden`} aria-label="Next blog" disabled={edges.end} onClick={() => swiper?.slideNext()}>
            <FiArrowRight aria-hidden="true" />
          </button>
          <Pill href="/blog" arrow className="tw:ml-2 tw:max-bsmd:ml-0">
            View All
          </Pill>
        </div>
      </RowHead>

      <Swiper
        modules={[A11y, Keyboard]}
        keyboard={{ enabled: true, onlyInViewport: true }}
        slidesPerView={1.1}
        spaceBetween={16}
        breakpoints={{ 768: { slidesPerView: 2, spaceBetween: 20 }, 1100: { slidesPerView: 3, spaceBetween: 24 } }}
        onSwiper={(s) => {
          setSwiper(s);
          sync(s);
        }}
        onSlideChange={sync}
        onBreakpoint={sync}
        onResize={sync}
        className="tw:pt-1 tw:pb-2"
      >
        {blogs.map((blog) => (
          <SwiperSlide key={blog.id} className="tw:h-auto!">
            <BlogCard blog={blog} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Phones and tablets: arrows sit under the cards (owner, 27 Oct). */}
      <div className="tw:mt-5 tw:flex tw:items-center tw:justify-center tw:gap-3 tw:bsmd:hidden">
        <button type="button" className={NAV} aria-label="Previous blog" disabled={edges.start} onClick={() => swiper?.slidePrev()}>
          <FiArrowLeft aria-hidden="true" />
        </button>
        <button type="button" className={NAV} aria-label="Next blog" disabled={edges.end} onClick={() => swiper?.slideNext()}>
          <FiArrowRight aria-hidden="true" />
        </button>
      </div>
    </>
  );
}
