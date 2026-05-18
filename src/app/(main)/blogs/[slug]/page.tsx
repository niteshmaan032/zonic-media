import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { FaCalendarDays, FaCircleUser, FaArrowLeft } from "react-icons/fa6";
import Footer from "@/app/components/Footer";
import {
  getPublishedBlogBySlug,
  getPublishedBlogs,
} from "@/backend/lib/blogs";
import "@/app/style/BlogPage.css";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getPublishedBlogBySlug(slug);

  if (!blog) {
    return { title: "Blog Not Found" };
  }

  return {
    title: blog.blogTitle,
    description: blog.excerpt,
    alternates: {
      canonical: `/blogs/${slug}`,
    },
    openGraph: {
      title: blog.blogTitle,
      description: blog.excerpt,
      images: [{ url: blog.featuredImageUrl, alt: blog.blogTitle }],
      type: "article",
      publishedTime: blog.publishedAt ?? undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.blogTitle,
      description: blog.excerpt,
      images: [blog.featuredImageUrl],
    },
  };
}

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

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const [blog, recentBlogs] = await Promise.all([
    getPublishedBlogBySlug(slug),
    getPublishedBlogs(6),
  ]);

  if (!blog) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.blogTitle,
    image: blog.featuredImageUrl,
    author: {
      "@type": "Person",
      name: blog.authorName,
    },
    publisher: {
      "@type": "Organization",
      name: "Zonic Media",
      url: "https://zonicllc.com",
    },
    datePublished: blog.publishDate,
    dateModified: blog.publishedAt
      ? blog.publishedAt.split("T")[0]
      : blog.publishDate,
    description: blog.excerpt,
  };

  return (
    <>
      <Script
        id="blog-post-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bp-wrapper">
        <div className="bp-container">
          <div className="row g-4 g-xl-5">
            <div className="col-lg-8">
              <article className="bp-article">
                <Link href="/blogs" className="bp-back-link">
                  <FaArrowLeft size={12} /> All Posts
                </Link>

                <span className="bp-category-badge">{blog.serviceTitle}</span>
                <h1 className="bp-title">{blog.blogTitle}</h1>

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

                <div className="bp-featured-image">
                  <Image
                    src={blog.featuredImageUrl}
                    alt={blog.blogTitle}
                    fill
                    sizes="(max-width: 991px) 100vw, 65vw"
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>

                <div
                  className="bp-content"
                  dangerouslySetInnerHTML={{ __html: blog.descriptionHtml }}
                />
              </article>
            </div>

            <div className="col-lg-4">
              <aside className="bp-sidebar">
                <h2 className="bp-sidebar-heading">Recent Posts</h2>

                <div className="bp-recent-list">
                  {recentBlogs.map((recent) => (
                    <Link
                      key={recent.id}
                      href={`/blogs/${recent.slug}`}
                      className={`bp-recent-card${
                        recent.id === blog.id ? " bp-recent-card-active" : ""
                      }`}
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
                          {formatBlogDate(recent.publishDate)}
                        </p>
                        <h3 className="bp-recent-title">{recent.blogTitle}</h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
