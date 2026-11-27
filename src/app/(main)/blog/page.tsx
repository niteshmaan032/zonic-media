/*
 * BLOG LISTING — redesign draft (24 Oct 2026). Markup lives in
 * src/components/rd/blog/; this route loads the same published posts as the
 * live /blog and keeps its JSON-LD. Title, description and keywords
 * re-optimized 24 Oct 2026 (Semrush US: local seo blog, local seo tips,
 * google business profile help, ai search optimization; the live URL has
 * no ranking data).
 * Pages (?page=) are server-rendered URLs, each its own canonical page.
 * Topic filters were removed on 27 Nov 2026 (owner): any ?topic= URL, old or
 * new, 308s to /blog, so the blog never creates filter URLs again.
 */

import type { Metadata } from "next";
import { permanentRedirect, redirect } from "next/navigation";
import { getPublishedBlogs } from "@/backend/lib/blogs";
import { BlogIndexPage } from "@/components/rd/blog/BlogIndexPage";
import { PER_PAGE } from "@/components/rd/blog/blogBits";
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
  searchParams?: Promise<{
    page?: string | string[];
    topic?: string | string[];
  }>;
};

const pageOf = (value?: string | string[]) => {
  const raw = Array.isArray(value) ? value[0] : value;
  const n = Number.parseInt(raw ?? "1", 10);
  return Number.isFinite(n) && n > 0 ? n : 1;
};

/* Paginated pages (?page=2…) are their own canonical URL, as Google
   recommends for paginated lists. Page 1 is /blog, exactly as live. */
export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const params = await searchParams;
  const page = pageOf(params?.page);
  const canonical = page === 1 ? "/blog" : `/blog?page=${page}`;
  // Pages 2+ are their own canonical URLs, so each needs its own title and
  // description (Semrush flagged ?page=2…11 as duplicates of /blog, 26 Oct).
  const paged = page > 1;
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

  // Topic filters are gone (27 Nov 2026): every old ?topic= link, with or
  // without a page number, goes to the blog home.
  if (params?.topic) permanentRedirect("/blog");

  const blogs = await getPublishedBlogs();

  // One URL per listing page: /blog, then /blog?page=2, ?page=3… Every other
  // spelling is redirected, so pagination never leaves a second URL for the
  // same page for Google to report as a canonical or duplicate issue.
  const pages = Math.max(1, Math.ceil((blogs.length - 1) / PER_PAGE));
  if (params?.page !== undefined) {
    const page = pageOf(params.page);
    // Past the end (guides removed, or an old link): temporary, because the
    // page comes back once enough guides are published.
    if (page > pages) redirect(pages > 1 ? `/blog?page=${pages}` : "/blog");
    // ?page=1, ?page=0, ?page=abc → /blog; ?page=02, ?page=2&page=3 → ?page=2.
    if (page === 1) permanentRedirect("/blog");
    if (params.page !== String(page)) permanentRedirect(`/blog?page=${page}`);
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
      />
    </>
  );
}
