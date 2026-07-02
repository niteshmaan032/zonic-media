"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaCalendarDays,
  FaCircleUser,
  FaArrowRightLong,
} from "react-icons/fa6";
import BlogPagination from "@/app/components/BlogPagination";

const POSTS_PER_PAGE = 6;

type ListingPost = {
  id: string;
  slug: string;
  blogTitle: string;
  authorName: string;
  publishDate: string;
  featuredImageUrl: string;
  excerpt: string;
};

type Props = {
  posts: ListingPost[];
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

export default function BlogListingGrid({ posts }: Props) {
  const [page, setPage] = useState(1);
  const gridRef = useRef<HTMLDivElement>(null);

  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
  const visiblePosts = posts.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE,
  );

  const handlePageChange = (nextPage: number) => {
    setPage(nextPage);
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div ref={gridRef} className="bp-listing-grid">
        {visiblePosts.map((blog) => (
          <article key={blog.id} className="blog-card bp-listing-card">
            <div className="blog-card-image-wrap">
              <Image
                src={blog.featuredImageUrl}
                alt={blog.blogTitle}
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
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
              <h2 className="blog-card-title">
                <Link
                  href={`/blog/${blog.slug}`}
                  className="blog-card-title-link"
                >
                  {blog.blogTitle}
                </Link>
              </h2>
              <p className="blog-card-description">{blog.excerpt}</p>

              <Link href={`/blog/${blog.slug}`} className="blog-card-link">
                Continue Reading
                <FaArrowRightLong className="blog-card-link-arrow" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      <BlogPagination
        page={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        className="bp-listing-pagination"
        ariaLabel="Blog pages"
      />
    </>
  );
}
