"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState, type ReactNode } from "react";
import {
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpRight,
  FiCalendar,
  FiSearch,
  FiUser,
  FiX,
} from "react-icons/fi";
import { cx } from "@/components/rd/dfw-kit/primitives";
import {
  BLOG_BASE,
  PER_PAGE,
  formatShortDate,
  pageList,
  toneOf,
  topicOf,
} from "./blogBits";

export type BlogCardPost = {
  id: string;
  slug: string;
  blogTitle: string;
  serviceTitle: string;
  authorName: string;
  publishDate: string;
  featuredImageUrl: string;
  excerpt: string;
};

/** One post card (also used for related guides on the post page), in the
    /home2 blog-card style (owner, 24 Oct): white card with a hairline
    border, inset rounded photo, author and date with icon circles, title,
    a two-line summary and "Continue Reading" with the circled arrow (as on
    /home2; the clamp is the owner's call, 24 Oct). Kept from the
    owner's earlier asks: the 16:9 photo is contained (never cropped; every
    featured image is 1200×675) and the topic tag sits top-right in its
    colour. */
export function BlogCard({
  post,
  sizes = "(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw",
}: {
  post: BlogCardPost;
  sizes?: string;
}) {
  const topic = topicOf(post);
  return (
    <article className="tw:group tw:relative tw:flex tw:h-full tw:flex-col tw:rounded-(--r-xl) tw:border tw:border-[#e6eaf1] tw:bg-white tw:p-3 tw:transition tw:duration-300 tw:hover:-translate-y-1 tw:hover:border-[#d3dae6]">
      <div className="tw:relative tw:aspect-[16/9] tw:overflow-hidden tw:rounded-[28px] tw:bg-(--panel) tw:max-bssm:rounded-[20px]">
        <Image
          src={post.featuredImageUrl}
          alt={post.blogTitle}
          fill
          sizes={sizes}
          className="tw:object-contain tw:transition-transform tw:duration-500 tw:group-hover:scale-[1.03]"
        />
        <span
          className={cx(
            "tw:absolute tw:top-3 tw:right-3 tw:max-w-[calc(100%-24px)] tw:truncate tw:rounded-full tw:px-3 tw:py-1 tw:text-[12px] tw:font-semibold tw:[box-shadow:0_6px_16px_-8px_rgba(12,21,38,0.5)]",
            toneOf(topic),
          )}
        >
          {topic}
        </span>
      </div>
      <div className="tw:flex tw:grow tw:flex-col tw:px-3 tw:pt-4 tw:pb-2">
        <span className="tw:flex tw:flex-wrap tw:items-center tw:gap-x-3 tw:gap-y-1 tw:text-[13.5px] tw:font-medium tw:text-(--ink-2)">
          <span className="tw:flex tw:items-center tw:gap-1.5">
            <span
              className="tw:grid tw:size-7 tw:place-items-center tw:rounded-full tw:bg-(--blue-soft) tw:text-[13px] tw:text-(--blue)"
              aria-hidden="true"
            >
              <FiUser />
            </span>
            {post.authorName}
          </span>
          <span className="tw:flex tw:items-center tw:gap-1.5">
            <span
              className="tw:grid tw:size-7 tw:place-items-center tw:rounded-full tw:bg-(--gold-soft) tw:text-[13px] tw:text-[#8a6400]"
              aria-hidden="true"
            >
              <FiCalendar />
            </span>
            {formatShortDate(post.publishDate)}
          </span>
        </span>
        <h3 className="tw:mt-2.5 tw:text-[20px] tw:leading-[1.25] tw:tracking-[-0.02em] tw:text-balance">
          {/* Stretched link: the whole card opens the post. */}
          <Link
            href={`${BLOG_BASE}/${post.slug}`}
            className="tw:after:absolute tw:after:inset-0 tw:after:rounded-(--r-xl) tw:after:content-[''] tw:focus-visible:outline-none tw:focus-visible:after:outline-2 tw:focus-visible:after:outline-(--blue)"
          >
            {post.blogTitle}
          </Link>
        </h3>
        <p className="tw:mt-2 tw:line-clamp-2 tw:text-[15px]/[1.6] tw:text-(--text)">
          {post.excerpt}
        </p>
        <span
          className="tw:mt-auto tw:inline-flex tw:items-center tw:gap-3 tw:pt-4 tw:text-[15px] tw:font-semibold tw:text-(--ink)"
          aria-hidden="true"
        >
          Continue Reading
          <span className="tw:grid tw:size-9 tw:place-items-center tw:rounded-full tw:bg-(--blue-soft) tw:text-(--blue) tw:transition tw:duration-200 tw:group-hover:rotate-45 tw:group-hover:bg-(--gold) tw:group-hover:text-(--ink)">
            <FiArrowUpRight />
          </span>
        </span>
      </div>
    </article>
  );
}

const NUM =
  "tw:grid tw:size-11 tw:place-items-center tw:rounded-full tw:text-[15px] tw:font-medium tw:transition-colors";

/** Numbered pagination. With `href` the pages are real links (crawlable,
    work without JavaScript); with `onPick` they are buttons (search). */
function Pager({
  page,
  pages,
  href,
  onPick,
}: {
  page: number;
  pages: number;
  href?: (n: number) => string;
  onPick?: (n: number) => void;
}) {
  if (pages < 2) return null;
  const item = (
    key: string,
    n: number,
    label: ReactNode,
    cls: string,
    aria?: string,
  ) =>
    href ? (
      <Link
        key={key}
        href={href(n)}
        className={cls}
        aria-label={aria}
        aria-current={!aria && n === page ? "page" : undefined}
      >
        {label}
      </Link>
    ) : (
      <button
        key={key}
        type="button"
        onClick={() => onPick?.(n)}
        className={cls}
        aria-label={aria}
        aria-current={!aria && n === page ? "page" : undefined}
      >
        {label}
      </button>
    );
  const edge = (on: boolean) =>
    cx(
      NUM,
      "tw:border tw:border-(--line) tw:bg-white tw:text-(--ink)",
      on ? "tw:hover:border-(--ink)" : "tw:pointer-events-none tw:opacity-40",
    );
  return (
    <nav
      aria-label="Blog pages"
      className="tw:mt-12 tw:flex tw:flex-wrap tw:items-center tw:justify-center tw:gap-2"
    >
      {item(
        "prev",
        Math.max(1, page - 1),
        <FiArrowLeft aria-hidden="true" />,
        edge(page > 1),
        "Previous page",
      )}
      {pageList(page, pages).map((n, i) =>
        n === null ? (
          <span
            key={`gap-${i}`}
            className="tw:px-1 tw:text-(--muted)"
            aria-hidden="true"
          >
            …
          </span>
        ) : (
          item(
            `p${n}`,
            n,
            n,
            cx(
              NUM,
              n === page
                ? "tw:bg-(--ink) tw:text-white"
                : "tw:border tw:border-(--line) tw:bg-white tw:text-(--ink) tw:hover:border-(--ink)",
            ),
          )
        ),
      )}
      {item(
        "next",
        Math.min(pages, page + 1),
        <FiArrowRight aria-hidden="true" />,
        edge(page < pages),
        "Next page",
      )}
    </nav>
  );
}

/** Blog listing grid (owner, 24 Oct): 6 cards a page with numbered
    pagination. Topics and pages are real URLs (?topic=, ?page=) rendered on
    the server, so every guide is reachable by crawlable links; search runs
    in the browser over all guides with its own pages. */
export default function BlogGrid({
  all,
  posts,
  page,
  pages,
  topic,
  topics,
  total,
}: {
  all: BlogCardPost[];
  posts: BlogCardPost[];
  page: number;
  pages: number;
  topic: string | null;
  topics: { slug: string; label: string; count: number }[];
  total: number;
}) {
  const [query, setQuery] = useState("");
  const [searchPage, setSearchPage] = useState(1);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;
    return all.filter(
      (p) =>
        p.blogTitle.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q),
    );
  }, [all, query]);

  const pageHref = (n: number) => {
    const params = new URLSearchParams();
    if (topic) params.set("topic", topic);
    if (n > 1) params.set("page", String(n));
    const qs = params.toString();
    return `${BLOG_BASE}${qs ? `?${qs}` : ""}#guides`;
  };

  const chip = (active: boolean) =>
    cx(
      "tw:inline-flex tw:items-center tw:gap-2 tw:rounded-full tw:border tw:px-4 tw:py-2 tw:text-[14px] tw:font-medium tw:transition-colors",
      active
        ? "tw:border-(--ink) tw:bg-(--ink) tw:text-white"
        : "tw:border-(--line) tw:bg-white tw:text-(--ink-2) tw:hover:border-(--ink)",
    );

  const searchPages = results ? Math.ceil(results.length / PER_PAGE) : 0;
  const shown = results
    ? results.slice((searchPage - 1) * PER_PAGE, searchPage * PER_PAGE)
    : posts;

  return (
    <div>
      <div className="tw:flex tw:flex-wrap tw:items-center tw:justify-between tw:gap-4">
        <nav
          aria-label="Guide topics"
          className="tw:flex tw:flex-wrap tw:gap-2"
        >
          <Link href={`${BLOG_BASE}#guides`} className={chip(!topic)}>
            All guides
            <span className="tw:text-[12px] tw:opacity-70">{total}</span>
          </Link>
          {topics.map((t) => (
            <Link
              key={t.slug}
              href={`${BLOG_BASE}?topic=${t.slug}#guides`}
              className={chip(topic === t.slug)}
              aria-current={topic === t.slug ? "page" : undefined}
            >
              {t.label}
              <span className="tw:text-[12px] tw:opacity-70">{t.count}</span>
            </Link>
          ))}
        </nav>
        <label className="tw:relative tw:flex tw:w-full tw:max-w-[320px] tw:items-center tw:max-bsmd:max-w-none">
          <span className="tw:sr-only">Search guides</span>
          <FiSearch
            aria-hidden="true"
            className="tw:pointer-events-none tw:absolute tw:left-4 tw:size-4 tw:text-(--muted)"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSearchPage(1);
            }}
            placeholder="Search all guides"
            className="tw:h-12 tw:w-full tw:rounded-full tw:border tw:border-(--line) tw:bg-white tw:pr-10 tw:pl-11 tw:text-[15px] tw:text-(--ink) tw:outline-none tw:focus:border-(--blue)"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="tw:absolute tw:right-3 tw:grid tw:size-7 tw:place-items-center tw:rounded-full tw:text-(--muted) tw:hover:bg-(--panel)"
            >
              <FiX aria-hidden="true" />
            </button>
          ) : null}
        </label>
      </div>

      {results ? (
        <p className="tw:mt-6 tw:text-[15px] tw:text-(--muted)">
          {results.length} {results.length === 1 ? "guide" : "guides"} match
          &ldquo;{query.trim()}&rdquo;
        </p>
      ) : null}

      {shown.length ? (
        <div className="tw:mt-8 tw:grid tw:grid-cols-3 tw:gap-6 tw:max-bsxl:grid-cols-2 tw:max-bsmd:grid-cols-1 tw:max-bssm:mt-6 tw:max-bssm:gap-4">
          {shown.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p className="tw:mt-10 tw:rounded-(--r-xl) tw:bg-white tw:px-6 tw:py-12 tw:text-center tw:text-[17px] tw:text-(--text)">
          No guides match that search yet. Try another word.
        </p>
      )}

      {results ? (
        <Pager
          page={searchPage}
          pages={searchPages}
          onPick={(n) => {
            setSearchPage(n);
            document
              .getElementById("guides")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        />
      ) : (
        <Pager page={page} pages={pages} href={pageHref} />
      )}
    </div>
  );
}
