import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { FaCalendarDays, FaCircleUser } from "react-icons/fa6";
import Footer from "@/app/components/Footer";
import BlogPostFaqs from "@/app/components/BlogPostFaqs";
import BlogRecentPosts from "@/app/components/BlogRecentPosts";
import {
  getPublishedBlogBySlug,
  getPublishedBlogs,
} from "@/backend/lib/blogs";
import { buildBreadcrumbJsonLd, SITE_URL } from "@/shared/seoSchemas";
import { splitOnFaqMarker } from "@/shared/blogContent";
import "@/app/style/BlogPage.css";

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
  // CMS text is unvalidated — clamp to SERP-safe length at a word boundary.
  const rawDescription = blog.metaDescription?.trim() || blog.excerpt;
  const seoDescription =
    rawDescription.length > 160
      ? `${rawDescription.slice(0, 157).replace(/\s+\S*$/, "")}…`
      : rawDescription;

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
  const [blog, publishedBlogs] = await Promise.all([
    getPublishedBlogBySlug(slug),
    getPublishedBlogs(),
  ]);

  if (!blog) {
    notFound();
  }

  const recentPosts = publishedBlogs
    .filter((recent) => recent.slug !== slug)
    .map((recent) => ({
      id: recent.id,
      slug: recent.slug,
      blogTitle: recent.blogTitle,
      authorName: recent.authorName,
      publishDate: recent.publishDate,
      featuredImageUrl: recent.featuredImageUrl,
    }));

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
      <script
        id="blog-post-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        id="blog-post-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqJsonLd ? (
        <script
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

                <BlogRecentPosts posts={recentPosts} />
              </aside>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
