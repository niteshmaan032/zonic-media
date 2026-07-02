"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCircleUser } from "react-icons/fa6";
import BlogPagination from "@/app/components/BlogPagination";

const POSTS_PER_PAGE = 5;

type RecentPost = {
  id: string;
  slug: string;
  blogTitle: string;
  authorName: string;
  publishDate: string;
  featuredImageUrl: string;
};

type Props = {
  posts: RecentPost[];
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

export default function BlogRecentPosts({ posts }: Props) {
  const [page, setPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
  const visiblePosts = posts.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE,
  );

  return (
    <>
      <div className="bp-recent-list">
        {visiblePosts.map((recent) => (
          <Link
            key={recent.id}
            href={`/blog/${recent.slug}`}
            className="bp-recent-card"
          >
            <div className="bp-recent-img-wrap">
              <Image
                src={recent.featuredImageUrl}
                alt={recent.blogTitle}
                fill
                sizes="90px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="bp-recent-body">
              <p className="bp-recent-date">
                <FaCircleUser size={11} />
                {recent.authorName}&nbsp;&middot;&nbsp;
                {formatBlogDate(recent.publishDate)}
              </p>
              <h3 className="bp-recent-title">{recent.blogTitle}</h3>
            </div>
          </Link>
        ))}
      </div>

      <BlogPagination
        page={page}
        totalPages={totalPages}
        onPageChange={setPage}
        ariaLabel="Recent posts pages"
      />
    </>
  );
}
