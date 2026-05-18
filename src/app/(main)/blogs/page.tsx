import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { FaCalendarDays, FaCircleUser, FaArrowRight } from "react-icons/fa6";
import Footer from "@/app/components/Footer";
import { getPublishedBlogs } from "@/backend/lib/blogs";
import "@/app/style/BlogPage.css";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog | Digital Marketing & SEO Insights | Zonic Media",
  description:
    "Explore expert articles on local SEO, web design, Google Ads, and digital marketing strategies from the Zonic Media team.",
  alternates: {
    canonical: "/blogs",
  },
};

type BlogsPageProps = {
  searchParams?: Promise<{ blog?: string }>;
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

export default async function BlogsPage({ searchParams }: BlogsPageProps) {
  const params = await searchParams;

  // Backward compat: /blogs?blog=<id> → /blogs/<slug>
  if (params?.blog) {
    const blogs = await getPublishedBlogs();
    const found = blogs.find((b) => b.id === params.blog);

    if (found?.slug) {
      redirect(`/blogs/${found.slug}`);
    }

    redirect("/blogs");
  }

  const blogs = await getPublishedBlogs();

  return (
    <>
      <div className="bp-wrapper">
        <div className="bp-container">
          <div className="bp-listing-header">
            <h1>Our Blog</h1>
            <p>
              Insights, strategies, and updates from the Zonic Media team
            </p>
          </div>

          {blogs.length > 0 ? (
            <div className="bp-listing-grid">
              {blogs.map((blog) => (
                <article key={blog.id} className="bp-listing-card">
                  <div className="bp-listing-img-wrap">
                    <Image
                      src={blog.featuredImageUrl}
                      alt={blog.blogTitle}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  <div className="bp-listing-body">
                    <span className="bp-listing-badge">
                      {blog.serviceTitle}
                    </span>
                    <h2 className="bp-listing-title">{blog.blogTitle}</h2>
                    <p className="bp-listing-excerpt">{blog.excerpt}</p>

                    <div className="bp-listing-meta">
                      <span>
                        <FaCalendarDays size={12} aria-hidden="true" />
                        {formatBlogDate(blog.publishDate)}
                      </span>
                      <span style={{ opacity: 0.4 }}>·</span>
                      <span>
                        <FaCircleUser size={12} aria-hidden="true" />
                        {blog.authorName}
                      </span>
                    </div>

                    <Link
                      href={`/blogs/${blog.slug}`}
                      className="bp-listing-read-more"
                    >
                      Read More <FaArrowRight size={11} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="bp-empty">
              <h1>No published blogs yet.</h1>
              <p>Published admin blogs will appear here automatically.</p>
              <Link href="/" className="bp-empty-link">
                <FaArrowRight size={12} />
                Back to Home
              </Link>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
