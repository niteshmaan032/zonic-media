import { permanentRedirect } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { FaArrowRightLong } from "react-icons/fa6";
import Footer from "@/app/components/Footer";
import BlogListingGrid from "@/app/components/BlogListingGrid";
import { getPublishedBlogs } from "@/backend/lib/blogs";
import { buildBreadcrumbJsonLd, SITE_URL } from "@/shared/seoSchemas";
import "@/app/style/BlogPage.css";
import "@/app/style/Blogs.css";

export const revalidate = 300;

export const metadata: Metadata = {
  title: { absolute: "Zonic Media Blog | Local SEO, GBP & Digital Marketing Guides" },
  description:
    "Local SEO guides, Google Business Profile suspension and reinstatement help, Google Maps ranking tips and small-business marketing advice from Zonic Media.",
  keywords: [
    "local seo blog",
    "local seo tips",
    "google business profile suspended",
    "google maps ranking",
    "local seo for small business",
    "what is local seo",
    "local seo cost",
    "digital marketing guides",
  ],
  alternates: {
    canonical: "/blog",
  },
};

type BlogPageProps = {
  searchParams?: Promise<{ blog?: string }>;
};

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

  if (blogs.length === 0) {
    return (
      <>
        <script
          id="blog-breadcrumb-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <div className="bp-wrapper">
          <div className="bp-container">
            <section className="bp-empty">
              <h1>No Published Blogs Yet.</h1>
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

      <div className="bp-wrapper">
        <div className="bp-container">
          <header className="bp-listing-header">
            <h1 className="bp-listing-title">
              Insights from the Zonic Media Team
            </h1>
            <p className="bp-listing-sub">
              Practical guides on digital marketing, local SEO, web design,
              Google Ads, and growth strategy.
            </p>
          </header>

          <BlogListingGrid
            posts={blogs.map((blog) => ({
              id: blog.id,
              slug: blog.slug,
              blogTitle: blog.blogTitle,
              authorName: blog.authorName,
              publishDate: blog.publishDate,
              featuredImageUrl: blog.featuredImageUrl,
              excerpt: blog.excerpt,
            }))}
          />

          {/* The grid above paginates client-side (6 per page), so crawlers
              only saw the first six posts and 28 guides had zero internal
              links (Sept 2026 crawl). This server-rendered index links every
              published post. */}
          <nav className="bp-all-posts" aria-label="All articles">
            <h2 className="bp-all-posts-heading">All articles</h2>
            <ul className="bp-all-posts-list">
              {blogs.map((blog) => (
                <li key={blog.id}>
                  <Link href={`/blog/${blog.slug}`}>{blog.blogTitle}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <Footer />
    </>
  );
}
