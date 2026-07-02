import { permanentRedirect } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
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
        </div>
      </div>

      <Footer />
    </>
  );
}
