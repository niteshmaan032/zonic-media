import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { FaCalendarDays, FaCircleUser } from "react-icons/fa6";
import Footer from "@/app/components/Footer";
import BlogPostFaqs from "@/app/components/BlogPostFaqs";
import {
  getPublishedBlogBySlug,
  getPublishedBlogs,
} from "@/backend/lib/blogs";
import { buildBreadcrumbJsonLd, SITE_URL } from "@/shared/seoSchemas";
import "@/app/style/BlogPage.css";

const FAQ_MARKER_REGEX = /<div[^>]*\bdata-faqs-marker\b[^>]*><\/div>/i;
const FAQ_MARKER_REGEX_GLOBAL = /<div[^>]*\bdata-faqs-marker\b[^>]*><\/div>/gi;

function wrapTablesForScroll(html: string) {
  return html
    .replace(/<table\b([^>]*)>/gi, '<div class="bp-table-wrap"><table$1>')
    .replace(/<\/table>/gi, "</table></div>");
}

function splitOnFaqMarker(html: string) {
  const match = html.match(FAQ_MARKER_REGEX);
  if (!match || match.index === undefined) {
    return {
      before: wrapTablesForScroll(html.replace(FAQ_MARKER_REGEX_GLOBAL, "")),
      after: "",
      hasMarker: false,
    };
  }
  const before = wrapTablesForScroll(html.slice(0, match.index));
  const after = wrapTablesForScroll(
    html
      .slice(match.index + match[0].length)
      .replace(FAQ_MARKER_REGEX_GLOBAL, "")
  );
  return { before, after, hasMarker: true };
}

export const revalidate = 300;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getPublishedBlogBySlug(slug);

  if (!blog) {
    return { title: "Blog Not Found" };
  }

  const seoTitle = blog.metaTitle?.trim() || blog.blogTitle;
  const seoDescription = blog.metaDescription?.trim() || blog.excerpt;

  return {
    title: seoTitle,
    description: seoDescription,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      images: [{ url: blog.featuredImageUrl, alt: blog.blogTitle }],
      type: "article",
      publishedTime: blog.publishedAt ?? undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: seoDescription,
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
      url: SITE_URL,
    },
    datePublished: blog.publishDate,
    dateModified: blog.publishedAt
      ? blog.publishedAt.split("T")[0]
      : blog.publishDate,
    description: blog.metaDescription?.trim() || blog.excerpt,
  };

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: blog.blogTitle, url: `/blog/${slug}` },
  ]);

  const { before: contentBefore, after: contentAfter, hasMarker } =
    splitOnFaqMarker(blog.descriptionHtml);
  const hasFaqs = blog.faqs.length > 0;

  const faqJsonLd = hasFaqs
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: blog.faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : null;

  return (
    <>
      <Script
        id="blog-post-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Script
        id="blog-post-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqJsonLd ? (
        <Script
          id="blog-post-faq-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      ) : null}

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

                {hasMarker ? (
                  <>
                    <div
                      className="bp-content"
                      dangerouslySetInnerHTML={{ __html: contentBefore }}
                    />
                    {hasFaqs ? <BlogPostFaqs items={blog.faqs} /> : null}
                    {contentAfter ? (
                      <div
                        className="bp-content"
                        dangerouslySetInnerHTML={{ __html: contentAfter }}
                      />
                    ) : null}
                  </>
                ) : (
                  <>
                    <div
                      className="bp-content"
                      dangerouslySetInnerHTML={{ __html: contentBefore }}
                    />
                    {hasFaqs ? <BlogPostFaqs items={blog.faqs} /> : null}
                  </>
                )}
              </article>
            </div>

            <div className="col-lg-4">
              <aside className="bp-sidebar">
                <h2 className="bp-sidebar-heading">Recent Posts</h2>

                <div className="bp-recent-list">
                  {recentBlogs.map((recent) => (
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
                          {recent.authorName}&nbsp;·&nbsp;{formatBlogDate(recent.publishDate)}
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
