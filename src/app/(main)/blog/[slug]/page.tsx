import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaCalendarDays, FaCircleUser } from "react-icons/fa6";
import Footer from "@/app/components/Footer";
import BlogPostFaqs from "@/app/components/BlogPostFaqs";
import BlogRecentPosts from "@/app/components/BlogRecentPosts";
import {
  getPublishedBlogBySlug,
  getPublishedBlogs,
} from "@/backend/lib/blogs";
import { buildBreadcrumbJsonLd, SITE_URL } from "@/shared/seoSchemas";
import {
  canonicalizeHostLinks,
  ensureImageAlts,
  pickRelatedPosts,
  splitAfterFirstSection,
  splitOnFaqMarker,
} from "@/shared/blogContent";
import { BLOG_SEO_OVERRIDES } from "@/shared/blogSeoOverrides";
import BlogMidArticleCta from "@/app/components/BlogMidArticleCta";
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

  // Aug 2026 SEO plan rewrites take precedence over CMS copy for the mapped
  // posts (see blogSeoOverrides.ts).
  const override = BLOG_SEO_OVERRIDES[slug];
  const seoTitle = override?.title || blog.metaTitle?.trim() || blog.blogTitle;
  // CMS text is unvalidated — clamp to SERP-safe length at a word boundary.
  const rawDescription =
    override?.description || blog.metaDescription?.trim() || blog.excerpt;
  const seoDescription =
    rawDescription.length > 160
      ? `${rawDescription.slice(0, 157).replace(/\s+\S*$/, "")}…`
      : rawDescription;

  // The layout template appends " | Zonic Media" (14 chars). 63 of 180 live
  // titles overflowed 60 chars that way, so long titles render absolute.
  const title =
    seoTitle.length + 14 > 60 ? { absolute: seoTitle } : seoTitle;

  return {
    title,
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

  const relatedPosts = pickRelatedPosts(
    { slug, blogTitle: blog.blogTitle },
    publishedBlogs,
    4,
  );

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
    "@id": `${SITE_URL}/blog/${slug}#article`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${slug}`,
    },
    headline: blog.blogTitle,
    image: blog.featuredImageUrl,
    inLanguage: "en-US",
    isAccessibleForFree: true,
    author: {
      "@type": "Person",
      name: blog.authorName,
      worksFor: { "@id": `${SITE_URL}/#organization` },
    },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Zonic Media",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo.webp`,
      },
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
    splitOnFaqMarker(
      canonicalizeHostLinks(ensureImageAlts(blog.descriptionHtml, blog.blogTitle)),
    );
  const hasFaqs = blog.faqs.length > 0;

  // Mid-article CTA lands after the first section (Aug 2026 plan, action 18).
  const {
    intro: introHtml,
    rest: restHtml,
    hasSplit: hasMidCta,
  } = splitAfterFirstSection(contentBefore);

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

                <div
                  className="bp-content"
                  dangerouslySetInnerHTML={{ __html: introHtml }}
                />
                {hasMidCta ? (
                  <>
                    <BlogMidArticleCta />
                    <div
                      className="bp-content"
                      dangerouslySetInnerHTML={{ __html: restHtml }}
                    />
                  </>
                ) : null}
                {hasFaqs ? <BlogPostFaqs items={blog.faqs} /> : null}
                {hasMarker && contentAfter ? (
                  <div
                    className="bp-content"
                    dangerouslySetInnerHTML={{ __html: contentAfter }}
                  />
                ) : null}

                {relatedPosts.length > 0 ? (
                  <nav className="bp-related" aria-label="Related guides">
                    <h2 className="bp-related-heading">Related guides</h2>
                    <ul className="bp-related-list">
                      {relatedPosts.map((post) => (
                        <li key={post.id}>
                          <Link
                            href={`/blog/${post.slug}`}
                            className="bp-related-link"
                          >
                            {post.blogTitle}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                ) : null}
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
