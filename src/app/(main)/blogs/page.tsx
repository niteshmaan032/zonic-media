import "@/app/style/BlogPage.css";
import Image from "next/image";
import Link from "next/link";
import {
  FaCalendarDays,
  FaCircleUser,
  FaArrowLeft,
} from "react-icons/fa6";
import Footer from "@/app/components/Footer";
import { getPublishedBlogs, type PublicBlog } from "@/backend/lib/blogs";

export const dynamic = "force-dynamic";

type BlogPageProps = {
  searchParams?: Promise<{
    blog?: string;
  }>;
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

function BlogMeta({ blog }: { blog: PublicBlog }) {
  return (
    <div className="bp-meta">
      <span className="bp-meta-item">
        <FaCalendarDays size={13} />
        {formatBlogDate(blog.publishDate)}
      </span>
      <span className="bp-meta-dot" aria-hidden="true" />
      <span className="bp-meta-item">
        <FaCircleUser size={13} />
        {blog.authorName}
      </span>
    </div>
  );
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const blogs = await getPublishedBlogs();
  const selectedBlog =
    blogs.find((blog) => blog.id === params?.blog) ?? blogs[0] ?? null;

  return (
    <>
      <div className="bp-wrapper">
        <div className="bp-container">
          {selectedBlog ? (
            <div className="row g-4 g-xl-5">
              <div className="col-lg-8">
                <article className="bp-article">
                  <span className="bp-category-badge">
                    {selectedBlog.serviceTitle}
                  </span>
                  <h1 className="bp-title">{selectedBlog.blogTitle}</h1>

                  <BlogMeta blog={selectedBlog} />

                  <div className="bp-featured-image">
                    <Image
                      src={selectedBlog.featuredImageUrl}
                      alt={selectedBlog.blogTitle}
                      fill
                      sizes="(max-width: 991px) 100vw, 65vw"
                      style={{ objectFit: "cover" }}
                      priority
                    />
                  </div>

                  <div
                    className="bp-content"
                    dangerouslySetInnerHTML={{
                      __html: selectedBlog.descriptionHtml,
                    }}
                  />
                </article>
              </div>

              <div className="col-lg-4">
                <aside className="bp-sidebar">
                  <h2 className="bp-sidebar-heading">Recent Posts</h2>

                  <div className="bp-recent-list">
                    {blogs.map((blog) => (
                      <Link
                        key={blog.id}
                        href={`/blogs?blog=${blog.id}`}
                        className={`bp-recent-card${
                          blog.id === selectedBlog.id ? " bp-recent-card-active" : ""
                        }`}
                      >
                        <div className="bp-recent-img-wrap">
                          <Image
                            src={blog.featuredImageUrl}
                            alt={blog.blogTitle}
                            fill
                            sizes="90px"
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                        <div className="bp-recent-body">
                          <p className="bp-recent-date">
                            {formatBlogDate(blog.publishDate)}
                          </p>
                          <h3 className="bp-recent-title">{blog.blogTitle}</h3>
                        </div>
                      </Link>
                    ))}
                  </div>
                </aside>
              </div>
            </div>
          ) : (
            <section className="bp-empty">
              <h1>No published blogs yet.</h1>
              <p>Published admin blogs will appear here automatically.</p>
              <Link href="/" className="bp-empty-link">
                <FaArrowLeft size={12} />
                Back to Home
              </Link>
            </section>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
