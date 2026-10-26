/*
 * BLOG POST — redesign draft (24 Oct 2026). Same data, the same content
 * pipeline, the same metadata logic and the same JSON-LD as the live
 * /blog/[slug]; markup lives in src/components/rd/blog/BlogPostView.tsx.
 * Noindex, canonical to the live post, until the owner approves the swap.
 */

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPublishedBlogBySlug, getPublishedBlogs } from "@/backend/lib/blogs";
import { BlogPostView } from "@/components/rd/blog/BlogPostView";
import { addHeadingIds, readMinutes } from "@/components/rd/blog/blogBits";
import { buildBreadcrumbJsonLd, SITE_URL } from "@/shared/seoSchemas";
import {
  canonicalizeHostLinks,
  ensureImageAlts,
  optimizeCloudinaryImages,
  linkReinstatementService,
  normalizeHeadingLevels,
  pickRelatedPosts,
  rewriteRetiredBlogLinks,
  splitAfterFirstSection,
  splitOnFaqMarker,
} from "@/shared/blogContent";
import { BLOG_SEO_OVERRIDES } from "@/shared/blogSeoOverrides";

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

  // Same rules as the live post (blogSeoOverrides first, then CMS copy).
  const override = BLOG_SEO_OVERRIDES[slug];
  const seoTitle = override?.title || blog.metaTitle?.trim() || blog.blogTitle;
  const rawDescription =
    override?.description || blog.metaDescription?.trim() || blog.excerpt;
  const seoDescription =
    rawDescription.length > 160
      ? `${rawDescription.slice(0, 157).replace(/\s+\S*$/, "")}…`
      : rawDescription;
  const title = seoTitle.length + 14 > 60 ? { absolute: seoTitle } : seoTitle;

  return {
    title,
    description: seoDescription,
    alternates: { canonical: `/blog/${slug}` },
    // Redesign draft: out of the index until it replaces /blog/[slug].
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: `/blog/${slug}`,
      siteName: "Zonic Media",
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

const SUSPENSION_TOPIC_RE =
  /suspen|reinstat|appeal|deceptive|verif|unauthorized|lose their google|disappeared from google/i;

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const [blog, publishedBlogs] = await Promise.all([
    getPublishedBlogBySlug(slug),
    getPublishedBlogs(),
  ]);

  if (!blog) {
    notFound();
  }

  const related = pickRelatedPosts(
    { slug, blogTitle: blog.blogTitle },
    publishedBlogs,
    4,
  ).map((post) => ({
    id: post.id,
    slug: post.slug,
    blogTitle: post.blogTitle,
    serviceTitle: post.serviceTitle,
    authorName: post.authorName,
    publishDate: post.publishDate,
    featuredImageUrl: post.featuredImageUrl,
    excerpt:
      BLOG_SEO_OVERRIDES[post.slug]?.description ||
      post.metaDescription?.trim() ||
      post.excerpt,
  }));

  const recent = publishedBlogs
    .filter((post) => post.slug !== slug)
    .slice(0, 3)
    .map((post) => ({
      id: post.id,
      slug: post.slug,
      blogTitle: post.blogTitle,
      publishDate: post.publishDate,
      featuredImageUrl: post.featuredImageUrl,
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

  // Same pipeline as the live post, plus ids on the H2s for the contents.
  const { before, after, hasMarker } = splitOnFaqMarker(
    normalizeHeadingLevels(
      linkReinstatementService(
        rewriteRetiredBlogLinks(
          canonicalizeHostLinks(
            optimizeCloudinaryImages(
              ensureImageAlts(blog.descriptionHtml, blog.blogTitle),
            ),
          ),
        ),
      ),
    ),
  );
  const { html: beforeWithIds, toc } = addHeadingIds(before);
  const { intro, rest, hasSplit } = splitAfterFirstSection(beforeWithIds);
  const showMidCta =
    hasSplit && SUSPENSION_TOPIC_RE.test(`${blog.blogTitle} ${slug}`);

  const faqJsonLd = blog.faqs.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: blog.faqs.map((item) => ({
          "@type": "Question",
          // Collapse stray double spaces from the editor so the schema text
          // matches the rendered FAQ exactly.
          name: item.question.replace(/\s+/g, " ").trim(),
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer.replace(/\s+/g, " ").trim(),
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
      <BlogPostView
        blog={{
          blogTitle: blog.blogTitle,
          serviceTitle: blog.serviceTitle,
          authorName: blog.authorName,
          publishDate: blog.publishDate,
          featuredImageUrl: blog.featuredImageUrl,
          // Full-sentence summary for the header (the CMS excerpt is cut
          // mid-word): SEO override, then meta description, then excerpt.
          excerpt:
            BLOG_SEO_OVERRIDES[slug]?.description ||
            blog.metaDescription?.trim() ||
            blog.excerpt,
        }}
        introHtml={intro}
        restHtml={hasSplit ? rest : ""}
        afterHtml={hasMarker ? after : ""}
        showMidCta={showMidCta}
        toc={toc}
        minutes={readMinutes(blog.descriptionHtml)}
        faqs={blog.faqs}
        related={related}
        recent={recent}
      />
    </>
  );
}
