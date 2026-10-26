"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Keyboard } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import "swiper/css";
import { Pill, Strip } from "@/components/rd/dfw-kit/primitives";
import { BlogCard, type BlogCardPost } from "./BlogGrid";
import { BLOG_BASE } from "./blogBits";

const NAV =
  "tw:grid tw:size-[52px] tw:place-items-center tw:rounded-full tw:border tw:border-[#d3dae6] tw:bg-white tw:text-[18px] tw:text-(--ink) tw:transition tw:duration-200 tw:enabled:cursor-pointer tw:enabled:hover:border-(--ink) tw:enabled:hover:bg-(--ink) tw:enabled:hover:text-white tw:disabled:opacity-40";

/** Related guides on a post (owner, 24 Oct: a slider). All 4–6 related
    posts are in the HTML (Swiper renders every slide), so the links stay
    crawlable. 1.1 / 2 / 3 cards with prev/next and keyboard support. */
export function RelatedSlider({ posts }: { posts: BlogCardPost[] }) {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [edges, setEdges] = useState({ start: true, end: posts.length <= 3 });
  const sync = (s: SwiperType) =>
    setEdges({ start: s.isBeginning, end: s.isEnd });

  return (
    <>
      <div className="tw:mb-9 tw:flex tw:flex-wrap tw:items-end tw:justify-between tw:gap-4">
        <Strip id="bp-related-h" size="card">
          Related guides
        </Strip>
        <div className="tw:flex tw:items-center tw:gap-3">
          <button
            type="button"
            className={NAV}
            aria-label="Previous guides"
            disabled={edges.start}
            onClick={() => swiper?.slidePrev()}
          >
            <FiArrowLeft aria-hidden="true" />
          </button>
          <button
            type="button"
            className={NAV}
            aria-label="Next guides"
            disabled={edges.end}
            onClick={() => swiper?.slideNext()}
          >
            <FiArrowRight aria-hidden="true" />
          </button>
          <Pill href={BLOG_BASE} arrow className="tw:ml-2 tw:max-bssm:ml-0">
            All guides
          </Pill>
        </div>
      </div>
      <Swiper
        modules={[A11y, Keyboard]}
        keyboard={{ enabled: true, onlyInViewport: true }}
        slidesPerView={1.1}
        spaceBetween={16}
        breakpoints={{
          768: { slidesPerView: 2, spaceBetween: 20 },
          1100: { slidesPerView: 3, spaceBetween: 24 },
        }}
        onSwiper={(s) => {
          setSwiper(s);
          sync(s);
        }}
        onSlideChange={sync}
        onResize={sync}
        className="tw:[&_.swiper-slide]:h-auto"
      >
        {posts.map((post) => (
          <SwiperSlide key={post.id}>
            <BlogCard
              post={post}
              sizes="(max-width: 767px) 90vw, (max-width: 1099px) 50vw, 33vw"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
