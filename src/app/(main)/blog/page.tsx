/*
 * BLOG LISTING — redesign draft (24 Oct 2026). Markup lives in
 * src/components/rd/blog/; this route loads the same published posts as the
 * live /blog and keeps its JSON-LD. Title, description and keywords
 * re-optimized 24 Oct 2026 (Semrush US: local seo blog, local seo tips,
 * google business profile help, ai search optimization; the live URL has
 * no ranking data).
 * Pages (?page=) and topics (?topic=) are server-rendered URLs. Noindex until the owner approves the swap.
 */

import type { Metadata } from "next";
import { getPublishedBlogs } from "@/backend/lib/blogs";
import { BlogIndexPage } from "@/components/rd/blog/BlogIndexPage";
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
   recommends for paginated lists; topic views (?topic=…) canonicalise to
   /blog. Page 1 is /blog, exactly as live. */
export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const params = await searchParams;
  const page = pageOf(params?.page);
  const canonical =
    params?.topic || page === 1 ? "/blog" : `/blog?page=${page}`;
  return {
    ...BASE_METADATA,
    alternates: { canonical },
    openGraph: {
      title: "Local SEO Blog: GBP, Google Maps & AI Search Guides | Zonic",
      description: BASE_METADATA.description ?? undefined,
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
        topic={params?.topic ?? null}
      />
    </>
  );
}
