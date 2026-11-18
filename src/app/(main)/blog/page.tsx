/*
 * BLOG LISTING — redesign draft (24 Oct 2026). Markup lives in
 * src/components/rd/blog/; this route loads the same published posts as the
 * live /blog and keeps its JSON-LD. Title, description and keywords
 * re-optimized 24 Oct 2026 (Semrush US: local seo blog, local seo tips,
 * google business profile help, ai search optimization; the live URL has
 * no ranking data).
 * Pages (?page=) and topics (?topic=) are server-rendered URLs. Each is its
 * own canonical, indexable page; topic rules live in blogBits (blogTopics).
 */

import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import { getPublishedBlogs } from "@/backend/lib/blogs";
import { BlogIndexPage } from "@/components/rd/blog/BlogIndexPage";
import {
  blogTopics,
  topicCopy,
  topicOf,
  topicSlug,
} from "@/components/rd/blog/blogBits";
import { buildBreadcrumbJsonLd, SITE_URL } from "@/shared/seoSchemas";
import { BLOG_SEO_OVERRIDES } from "@/shared/blogSeoOverrides";

export const revalidate = 300;

const BASE_METADATA: Metadata = {
  title: {
    absolute: "Local SEO Blog: GBP, Google Maps & AI Search Guides | Zonic",
  },
  description:
    "Local SEO tips and Google Business Profile guides for small businesses: Google Maps rankings, suspension fixes, reviews and AI search, from Zonic Media.",
  keywords: [
    "local seo blog",
    "local seo tips",
    "local seo guide",
    "google business profile help",
    "google business profile guide",
    "google business profile suspended",
    "how to rank on google maps",
    "ai search optimization",
    "local seo for small business",
    "small business marketing tips",
    "digital marketing blog",
  ],
  // Redesign draft: out of the index until it replaces /blog.
};

type Props = {
  searchParams?: Promise<{ page?: string; topic?: string }>;
};

const pageOf = (value?: string) => {
  const n = Number.parseInt(value ?? "1", 10);
  return Number.isFinite(n) && n > 0 ? n : 1;
};

/* Paginated pages (?page=2…) are their own canonical URL, as Google
   recommends for paginated lists, and so are topic pages (?topic=…, one page
   per topic). Page 1 is /blog, exactly as live. */
export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const params = await searchParams;
  const topic = params?.topic
    ? blogTopics(await getPublishedBlogs()).find((t) => t.slug === params.topic)
    : undefined;
  if (topic) {
    const copy = topicCopy(topic);
    const url = `/blog?topic=${topic.slug}`;
    return {
      ...BASE_METADATA,
      title: { absolute: copy.title },
      description: copy.description,
      alternates: { canonical: url },
      openGraph: {
        title: copy.title,
        description: copy.description,
        url,
        type: "website",
        siteName: "Zonic Media",
        images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: copy.h1 }],
      },
    };
  }
  const page = pageOf(params?.page);
  const canonical = page === 1 ? "/blog" : `/blog?page=${page}`;
  // Pages 2+ are their own canonical URLs, so each needs its own title and
  // description (Semrush flagged ?page=2…11 as duplicates of /blog, 26 Oct).
  const paged = !params?.topic && page > 1;
  const title = paged
    ? `Local SEO Blog (Page ${page}): GBP, Maps & AI Guides | Zonic`
    : "Local SEO Blog: GBP, Google Maps & AI Search Guides | Zonic";
  const description = paged
    ? `Page ${page} of the Zonic Media local SEO blog: more guides on Google Business Profile suspensions, Google Maps rankings, reviews and AI search.`
    : (BASE_METADATA.description as string);
  return {
    ...BASE_METADATA,
    title: { absolute: title },
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      siteName: "Zonic Media",
      images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Zonic Media local SEO blog" }],
    },
  };
}

export default async function Page({ searchParams }: Props) {
  const params = await searchParams;
  const blogs = await getPublishedBlogs();

  // A topic without its own page (too few guides, or renamed) and the old
  // per-topic pages (?topic=…&page=2) have no page of their own: 308 them so
  // no extra canonicalised URL is left for Google to report.
  const topic = params?.topic
    ? blogTopics(blogs).find((t) => t.slug === params.topic)
    : undefined;
  if (params?.topic && !topic) permanentRedirect("/blog");
  if (topic && params?.page) permanentRedirect(`/blog?topic=${topic.slug}`);
  const listed = topic
    ? blogs.filter((blog) => topicSlug(topicOf(blog)) === topic.slug)
    : blogs;

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    ...(topic ? [{ name: topic.label, url: `/blog?topic=${topic.slug}` }] : []),
  ]);

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: listed.map((blog, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${SITE_URL}/blog/${blog.slug}`,
      name: blog.blogTitle,
    })),
  };

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blog#blog`,
    name: "Zonic Media Blog",
    description:
      "Guides on local SEO, Google Business Profile suspensions and reinstatement, Google Maps ranking, web design, and Google Ads.",
    url: `${SITE_URL}/blog`,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-US",
  };

  return (
    <>
      <script
        id="blog-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        id="blog-itemlist-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        id="blog-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <BlogIndexPage
        all={blogs.map((blog) => ({
          id: blog.id,
          slug: blog.slug,
          blogTitle: blog.blogTitle,
          serviceTitle: blog.serviceTitle,
          authorName: blog.authorName,
          publishDate: blog.publishDate,
          featuredImageUrl: blog.featuredImageUrl,
          // Full-sentence summary (the CMS excerpt is cut mid-word).
          excerpt:
            BLOG_SEO_OVERRIDES[blog.slug]?.description ||
            blog.metaDescription?.trim() ||
            blog.excerpt,
        }))}
        page={pageOf(params?.page)}
        topic={topic?.slug ?? null}
      />
    </>
  );
}
