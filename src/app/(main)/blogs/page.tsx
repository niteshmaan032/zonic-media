"use client";

import "@/app/style/BlogPage.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaCalendarDays,
  FaCircleUser,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa6";
import Footer from "@/app/components/Footer";

// ── types ─────────────────────────────────────────────────────────────────────

type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

// ── featured blog ─────────────────────────────────────────────────────────────

const blog = {
  title: "How Local SEO Helps Service Brands Win Nearby Searches",
  date: "March 12, 2026",
  author: "Zonic Media Team",
  category: "Local SEO",
  image: "/images/home-seo-2.webp",
  content: [
    {
      type: "p" as const,
      text: "Local SEO is no longer optional for service businesses. Whether you run a plumbing company, a dental practice, or a home cleaning service, the majority of your customers start their search online — and they start locally. If your business is not showing up in the Google Map Pack or the top organic results for your city and service, you are handing revenue directly to your competitors.",
    },
    {
      type: "h2" as const,
      text: "Why Local Search Matters More Than Ever",
    },
    {
      type: "p" as const,
      text: "According to Google, 76% of people who search for something nearby on their smartphone visit a related business within a day — and 28% of those searches result in a purchase. For service brands, this is the highest-intent traffic available. People searching for a plumber or dentist near them are ready to act. The only question is whether they find you or your competitor.",
    },
    {
      type: "p" as const,
      text: "Local SEO is the practice of optimizing your online presence to appear for geographically relevant searches. It encompasses your Google Business Profile, on-page SEO signals, local citations, review strategy, and the technical health of your website. When all these elements work together, your business earns visibility exactly where and when it matters most.",
    },
    {
      type: "h2" as const,
      text: "The Google Map Pack: Your Most Valuable Real Estate",
    },
    {
      type: "p" as const,
      text: "The Google Map Pack — the block of three local listings that appears at the top of local search results — captures approximately 44% of all local search clicks. Ranking in the top three is not luck. It is a systematic process built on three core signals: relevance, distance, and prominence.",
    },
    {
      type: "ul" as const,
      items: [
        "Relevance: How well your Google Business Profile and website match the search intent",
        "Distance: The proximity of your location to the searcher's location",
        "Prominence: Your overall authority — reviews, citations, backlinks, and engagement signals",
      ],
    },
    {
      type: "h2" as const,
      text: "Building Trust Fast: The Role of Reviews",
    },
    {
      type: "p" as const,
      text: "Online reviews are one of the most powerful local ranking signals — and more importantly, they are a trust signal for potential customers. A business with a 4.8-star rating and 200 reviews will consistently outperform a competitor with 3.9 stars and 15 reviews, even if the latter has a technically stronger website. Your review strategy needs to be proactive, systematic, and integrated into your post-service workflow.",
    },
    {
      type: "quote" as const,
      text: "A business that earns one new 5-star review per week compounds its local authority faster than most paid campaigns can replicate.",
    },
    {
      type: "h2" as const,
      text: "Turning Local Traffic Into Qualified Leads",
    },
    {
      type: "p" as const,
      text: "Visibility is only half the equation. Once a potential customer clicks through to your website or calls your business, the conversion experience must be just as strong as your search presence. Your landing pages need clear service descriptions, trust signals, fast load times, and frictionless calls-to-action. A strong local SEO strategy accounts for the full journey — from discovery to decision.",
    },
    {
      type: "p" as const,
      text: "At Zonic Media, we build local SEO strategies that connect all the pieces: Google Business Profile optimization, keyword-targeted service pages, citation building, review generation systems, and conversion-focused landing pages. The goal is not just more traffic — it is more revenue from the searches already happening in your area.",
    },
  ] as ContentBlock[],
};

// ── recent blogs ──────────────────────────────────────────────────────────────

const recentBlogs = [
  {
    slug: "google-ads-4x-roas",
    image: "/images/new-home/ChatGPT Image May 4, 2026, 02_34_31 PM.png",
    date: "March 5, 2026",
    title: "How We Achieve 4x ROAS on Google Ads Without Burning Your Budget",
  },
  {
    slug: "conversion-design",
    image: "/images/new-home/ChatGPT Image May 4, 2026, 02_33_30 PM.png",
    date: "February 20, 2026",
    title: "Why Conversion-Focused Design Outperforms Beautiful Design Every Time",
  },
  {
    slug: "local-seo-map-pack",
    image: "/images/new-home/ChatGPT Image May 4, 2026, 02_35_28 PM.png",
    date: "February 10, 2026",
    title: "The Local SEO Playbook That Gets Businesses into the Google Map Pack",
  },
  {
    slug: "web-design-conversion-rate",
    image: "/images/new-home/ChatGPT Image May 4, 2026, 02_33_30 PM.png",
    date: "January 28, 2026",
    title: "5 Web Design Principles That Dramatically Improve Conversion Rates",
  },
  {
    slug: "gmb-optimization-guide",
    image: "/images/new-home/ChatGPT Image May 4, 2026, 02_34_31 PM.png",
    date: "January 15, 2026",
    title: "The Complete Google Business Profile Optimization Guide for 2026",
  },
  {
    slug: "seo-content-strategy",
    image: "/images/new-home/ChatGPT Image May 4, 2026, 02_35_28 PM.png",
    date: "January 5, 2026",
    title: "Content Strategy for SEO: How to Create Content That Actually Ranks",
  },
  {
    slug: "ppc-vs-seo",
    image: "/images/new-home/ChatGPT Image May 4, 2026, 02_33_30 PM.png",
    date: "December 20, 2025",
    title: "PPC vs SEO: Which Channel Drives Better ROI for Service Businesses",
  },
  {
    slug: "brand-identity-guide",
    image: "/images/new-home/ChatGPT Image May 4, 2026, 02_34_31 PM.png",
    date: "December 10, 2025",
    title: "How a Strong Brand Identity Multiplies the Impact of Every Campaign",
  },
];

const BLOGS_PER_PAGE = 4;

// ── page ──────────────────────────────────────────────────────────────────────

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(recentBlogs.length / BLOGS_PER_PAGE);
  const paginatedBlogs = recentBlogs.slice(
    (currentPage - 1) * BLOGS_PER_PAGE,
    currentPage * BLOGS_PER_PAGE
  );

  return (
    <>
      <div className="bp-wrapper">
        <div className="bp-container">
          <div className="row g-4 g-xl-5">

            {/* ── LEFT: Blog Reading Area ─────────────────────────────── */}
            <div className="col-lg-8">
              <article className="bp-article">

                <span className="bp-category-badge">{blog.category}</span>
                <h1 className="bp-title">{blog.title}</h1>

                <div className="bp-meta">
                  <span className="bp-meta-item">
                    <FaCalendarDays size={13} />
                    {blog.date}
                  </span>
                  <span className="bp-meta-dot" aria-hidden="true" />
                  <span className="bp-meta-item">
                    <FaCircleUser size={13} />
                    {blog.author}
                  </span>
                </div>

                <div className="bp-featured-image">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 991px) 100vw, 65vw"
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>

                <div className="bp-content">
                  {blog.content.map((block, i) => {
                    if (block.type === "h2") {
                      return (
                        <h2 key={i} className="bp-content-h2">
                          {block.text}
                        </h2>
                      );
                    }
                    if (block.type === "ul") {
                      return (
                        <ul key={i} className="bp-content-list">
                          {block.items.map((item, j) => (
                            <li key={j}>{item}</li>
                          ))}
                        </ul>
                      );
                    }
                    if (block.type === "quote") {
                      return (
                        <blockquote key={i} className="bp-blockquote">
                          {block.text}
                        </blockquote>
                      );
                    }
                    return (
                      <p key={i} className="bp-content-p">
                        {block.text}
                      </p>
                    );
                  })}
                </div>

              </article>
            </div>

            {/* ── RIGHT: Sidebar ──────────────────────────────────────── */}
            <div className="col-lg-4">
              <aside className="bp-sidebar">
                <h2 className="bp-sidebar-heading">Recent Posts</h2>

                <div className="bp-recent-list">
                  {paginatedBlogs.map((b) => (
                    <Link
                      key={b.slug}
                      href={`/blogs/${b.slug}`}
                      className="bp-recent-card"
                    >
                      <div className="bp-recent-img-wrap">
                        <Image
                          src={b.image}
                          alt={b.title}
                          fill
                          sizes="90px"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div className="bp-recent-body">
                        <p className="bp-recent-date">{b.date}</p>
                        <h3 className="bp-recent-title">{b.title}</h3>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="bp-pagination">
                  <button
                    className="bp-page-btn bp-page-arrow"
                    onClick={() => setCurrentPage((p) => p - 1)}
                    disabled={currentPage === 1}
                    aria-label="Previous page"
                  >
                    <FaArrowLeft size={11} />
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i + 1}
                      className={`bp-page-btn${
                        currentPage === i + 1 ? " bp-page-active" : ""
                      }`}
                      onClick={() => setCurrentPage(i + 1)}
                      aria-label={`Page ${i + 1}`}
                    >
                      {i + 1}
                    </button>
                  ))}

                  <button
                    className="bp-page-btn bp-page-arrow"
                    onClick={() => setCurrentPage((p) => p + 1)}
                    disabled={currentPage === totalPages}
                    aria-label="Next page"
                  >
                    <FaArrowRight size={11} />
                  </button>
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
