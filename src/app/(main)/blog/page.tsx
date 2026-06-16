import { permanentRedirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import {
  FaCalendarDays,
  FaCircleUser,
  FaArrowRightLong,
} from "react-icons/fa6";
import Footer from "@/app/components/Footer";
import { getPublishedBlogs } from "@/backend/lib/blogs";
import { buildBreadcrumbJsonLd, SITE_URL } from "@/shared/seoSchemas";
import "@/app/style/BlogPage.css";
import "@/app/style/Blogs.css";

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

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
  ]);

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: blogs.map((blog, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${SITE_URL}/blog/${blog.slug}`,
      name: blog.blogTitle,
    })),
  };

  if (blogs.length === 0) {
    return (
      <>
        <Script
          id="blog-breadcrumb-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <div className="bp-wrapper">
          <div className="bp-container">
            <section className="bp-empty">
              <h1>No published blogs yet.</h1>
              <p>Published admin blogs will appear here automatically.</p>
              <Link href="/" className="bp-empty-link">
                <FaArrowRightLong size={12} />
                Back to Home
              </Link>
            </section>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Script
        id="blog-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Script
        id="blog-itemlist-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      <div className="bp-wrapper">
        <div className="bp-container">
          <header className="bp-listing-header">
            <h1 className="bp-listing-title">
              Insights from the Zonic Media team
            </h1>
            <p className="bp-listing-sub">
              Practical guides on digital marketing, local SEO, web design,
              Google Ads, and growth strategy.
            </p>
          </header>

          <div className="bp-listing-grid">
            {blogs.map((blog) => (
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

                  <Link
                    href={`/blog/${blog.slug}`}
                    className="blog-card-link"
                  >
                    Continue Reading
                    <FaArrowRightLong className="blog-card-link-arrow" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
