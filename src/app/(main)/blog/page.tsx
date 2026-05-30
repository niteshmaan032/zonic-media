import { permanentRedirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import { FaCalendarDays, FaCircleUser, FaArrowRight } from "react-icons/fa6";
import Footer from "@/app/components/Footer";
import { getPublishedBlogs } from "@/backend/lib/blogs";
import { buildBreadcrumbJsonLd, SITE_URL } from "@/shared/seoSchemas";
import "@/app/style/BlogPage.css";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Blog | Digital Marketing & SEO Insights",
  description:
    "Read the latest digital marketing, local SEO, web design, and Google Ads insights from the Zonic Media team.",
  alternates: {
    canonical: "/blog",
  },
};

type BlogPageProps = {
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

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const blogs = await getPublishedBlogs();

  if (params?.blog) {
    const found = blogs.find((blog) => blog.id === params.blog);

    if (found?.slug) {
      permanentRedirect(`/blog/${found.slug}`);
    }
  }

  const blog = blogs[0] ?? null;

  if (!blog) {
    return (
      <>
        <div className="bp-wrapper">
          <div className="bp-container">
            <section className="bp-empty">
              <h1>No published blogs yet.</h1>
              <p>Published admin blogs will appear here automatically.</p>
              <Link href="/" className="bp-empty-link">
                <FaArrowRight size={12} />
                Back to Home
              </Link>
            </section>
          </div>
        </div>
        <Footer />
      </>
    );
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
      url: SITE_URL,
    },
    datePublished: blog.publishDate,
    dateModified: blog.publishedAt
      ? blog.publishedAt.split("T")[0]
      : blog.publishDate,
    description: blog.excerpt,
  };

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
  ]);

  return (
    <>
      <Script
        id="blog-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Script
        id="blog-latest-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bp-wrapper">
        <div className="bp-container">
          <div className="row g-4 g-xl-5">
            <div className="col-lg-8">
              <article className="bp-article">
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
                  {blogs.map((recent) => (
                    <Link
                      key={recent.id}
                      href={`/blog/${recent.slug}`}
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
                          <FaCircleUser size={11} />
                          {recent.authorName}&nbsp;·&nbsp;
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
