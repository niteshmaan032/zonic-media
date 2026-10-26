import Image from "next/image";
import Link from "next/link";
import {
  FiCalendar,
  FiChevronDown,
  FiChevronRight,
  FiClock,
  FiList,
  FiPhone,
  FiPlus,
  FiShield,
  FiUser,
} from "react-icons/fi";

import "@/components/rd/dfw-kit/kit.css";
import "@/components/rd/dfw-kit/ui.css";
import "./prose.css";

import Footer from "@/app/components/Footer";
import type { FaqItem } from "@/backend/lib/blogs";
import {
  Pill,
  Section,
  Strip,
  Wrap,
  cx,
} from "@/components/rd/dfw-kit/primitives";
import { BannerLoops, GRAIN } from "@/components/rd/dfw-kit/banner";
import { GoogleG, InlinePin } from "@/components/rd/dfw-kit/visuals";
import { SITE_CONTACT } from "@/shared/siteConfig";
import { type BlogCardPost } from "./BlogGrid";
import { RelatedSlider } from "./RelatedSlider";
import { BLOG_BASE, formatShortDate } from "./blogBits";

/* ---------------------------------------------------------------------------
   BLOG POST — redesign draft (24 Oct 2026), /blog-2/[slug] (noindex).

   Same post data and the same content pipeline as the live /blog/[slug]
   (the route builds the HTML; this only lays it out), the same FAQ, Article
   and breadcrumb JSON-LD, and the same mid-article reinstatement CTA rule.
   New: header with author, date and reading time; "On this page" contents
   from the article's H2s; a sticky sidebar (contents, free-audit card,
   recent guides); FAQs as native <details>; author box; related guides as
   cards; light closing banner.
--------------------------------------------------------------------------- */

type RecentPost = {
  id: string;
  slug: string;
  blogTitle: string;
  publishDate: string;
  featuredImageUrl: string;
};

export type BlogPostViewProps = {
  blog: {
    blogTitle: string;
    serviceTitle: string;
    authorName: string;
    publishDate: string;
    featuredImageUrl: string;
    excerpt: string;
  };
  introHtml: string;
  restHtml: string;
  afterHtml: string;
  showMidCta: boolean;
  toc: { id: string; text: string }[];
  minutes: number;
  faqs: FaqItem[];
  related: BlogCardPost[];
  recent: RecentPost[];
};

/** "On this page" list (sidebar on desktop, folded panel on phones). */
function Contents({ toc }: { toc: BlogPostViewProps["toc"] }) {
  return (
    <ol className="tw:grid tw:gap-0.5">
      {toc.map((item, i) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            className="tw:grid tw:grid-cols-[22px_minmax(0,1fr)] tw:gap-2 tw:rounded-[10px] tw:px-2 tw:py-2 tw:text-[14.5px]/[1.45] tw:text-(--text) tw:transition-colors tw:hover:bg-(--panel) tw:hover:text-(--ink)"
          >
            <span className="tw:text-[12px] tw:font-semibold tw:text-(--muted) tw:tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </span>
            {item.text}
          </a>
        </li>
      ))}
    </ol>
  );
}

/** Reinstatement card, shown mid-article on suspension posts only (same
    rule and copy as the live BlogMidArticleCta). */
function MidCta() {
  return (
    <aside
      className="tw:my-10 tw:grid tw:grid-cols-[56px_minmax(0,1fr)] tw:gap-5 tw:rounded-(--r-xl) tw:bg-(--ink) tw:px-8 tw:py-8 tw:text-white tw:max-bssm:grid-cols-1 tw:max-bssm:px-6"
      aria-label="Reinstatement service"
    >
      <span
        className="tw:grid tw:size-14 tw:place-items-center tw:rounded-full tw:bg-white/10 tw:text-[24px] tw:text-(--gold)"
        aria-hidden="true"
      >
        <FiShield />
      </span>
      <div>
        <p className="tw:text-[13px] tw:font-semibold tw:tracking-[0.14em] tw:text-(--gold) tw:uppercase">
          Profile suspended right now?
        </p>
        <p className="tw:mt-2 tw:text-[17px]/[1.6] tw:text-[#d5deee]">
          We recover suspended Google Business Profiles for a living — 900+
          reinstatements handled. Get a free case review before you file another
          appeal on your own.
        </p>
        <div className="tw:mt-5 tw:flex tw:flex-wrap tw:items-center tw:gap-3">
          <Pill href="/services/gbp-reinstatement-service" tone="white">
            Get My Profile Back
          </Pill>
          <a
            href="tel:+13027269736"
            className="tw:text-[15px] tw:font-medium tw:text-white tw:underline tw:decoration-white/40 tw:underline-offset-4 tw:hover:decoration-white"
          >
            Or call (302) 726-9736
          </a>
        </div>
      </div>
    </aside>
  );
}

export function BlogPostView({
  blog,
  introHtml,
  restHtml,
  afterHtml,
  showMidCta,
  toc,
  minutes,
  faqs,
  related,
  recent,
}: BlogPostViewProps) {
  return (
    <>
      <main className="dk-root">
        {/* ========================================================== HEADER */}
        {/* Owner (24 Oct): heading on the left with only the date, reading
            time and author under it; the image (16:9, never cropped) on the
            right; the article below. Same side insets as the site header. */}
        <section
          className="tw:relative tw:isolate tw:overflow-clip tw:[background:radial-gradient(circle_at_12%_8%,rgba(37,103,232,0.09),transparent_28%),radial-gradient(circle_at_88%_6%,rgba(155,140,242,0.11),transparent_26%),linear-gradient(180deg,#fbfcff_0%,#f6f8fd_100%)] tw:pt-36 tw:pb-16 tw:max-bsmd:pt-[120px] tw:max-bsmd:pb-12 tw:max-bssm:pb-10"
          aria-labelledby="bp-h1"
        >
          <Wrap>
            {/* Owner, 25 Oct: heading block aligned to the top of the image,
                not centred against it, with a larger title. */}
            <div className="tw:grid tw:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] tw:items-start tw:gap-14 tw:max-bsxl:gap-10 tw:max-bslg:grid-cols-1 tw:max-bslg:gap-9">
              <div>
                <nav aria-label="Breadcrumb">
                  <ol className="tw:flex tw:flex-wrap tw:items-center tw:gap-1.5 tw:text-[14px] tw:text-(--muted)">
                    <li>
                      <Link href="/" className="tw:hover:text-(--ink)">
                        Home
                      </Link>
                    </li>
                    <li aria-hidden="true">
                      <FiChevronRight className="tw:size-3.5" />
                    </li>
                    <li>
                      <Link href={BLOG_BASE} className="tw:hover:text-(--ink)">
                        Blog
                      </Link>
                    </li>
                  </ol>
                </nav>
                {/* Smaller than the page heroes so long titles stay within
                    about three lines (owner, 27 Oct 2026). */}
                <h1
                  id="bp-h1"
                  className="tw:mt-5 tw:text-[clamp(30px,3.1vw,46px)] tw:leading-[1.12] tw:tracking-[-0.03em] tw:text-pretty tw:max-bssm:text-[clamp(24px,6.6vw,28px)] tw:max-bssm:leading-[1.18]"
                >
                  {blog.blogTitle}
                </h1>
                <ul className="tw:mt-7 tw:flex tw:min-w-0 tw:flex-nowrap tw:items-center tw:gap-x-6 tw:text-[15px] tw:whitespace-nowrap tw:text-(--ink-2) tw:max-bssm:mt-5 tw:max-bssm:gap-x-3 tw:max-bssm:text-[13px]">
                  <li className="tw:flex tw:flex-none tw:items-center tw:gap-2 tw:max-bssm:gap-1.5">
                    <span
                      className="tw:grid tw:size-8 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-(--gold-soft) tw:text-[14px] tw:text-[#8a6400] tw:max-bssm:size-6 tw:max-bssm:text-[12px]"
                      aria-hidden="true"
                    >
                      <FiCalendar />
                    </span>
                    {formatShortDate(blog.publishDate)}
                  </li>
                  <li className="tw:flex tw:flex-none tw:items-center tw:gap-2 tw:max-bssm:gap-1.5">
                    <span
                      className="tw:grid tw:size-8 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-(--green-soft) tw:text-[14px] tw:text-[#1f7a3a] tw:max-bssm:size-6 tw:max-bssm:text-[12px]"
                      aria-hidden="true"
                    >
                      <FiClock />
                    </span>
                    {minutes} min read
                  </li>
                  <li className="tw:flex tw:min-w-0 tw:items-center tw:gap-2 tw:max-bssm:gap-1.5">
                    <span
                      className="tw:grid tw:size-8 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-(--blue-soft) tw:text-[14px] tw:text-(--blue) tw:max-bssm:size-6 tw:max-bssm:text-[12px]"
                      aria-hidden="true"
                    >
                      <FiUser />
                    </span>
                    <span className="tw:truncate">{blog.authorName}</span>
                  </li>
                </ul>
              </div>
              <div className="tw:relative tw:aspect-[16/9] tw:overflow-hidden tw:rounded-[28px] tw:bg-(--panel) tw:[box-shadow:0_40px_80px_-60px_rgba(12,21,38,0.55)] tw:max-bssm:rounded-[20px]">
                <Image
                  src={blog.featuredImageUrl}
                  alt={blog.blogTitle}
                  fill
                  priority
                  sizes="(max-width: 991px) 100vw, 50vw"
                  className="tw:object-contain"
                />
              </div>
            </div>
          </Wrap>
        </section>

        {/* ============================================================ BODY */}
        {/* Phones: no outer side padding around the article (owner, 27 Oct
            2026); the article keeps its own inner padding, and the contents
            box and sidebar keep the usual side margin. */}
        <Section labelledBy="bp-h1">
          <Wrap flushOnPhone>
            <div className="tw:grid tw:grid-cols-[minmax(0,1fr)_340px] tw:gap-14 tw:max-bsxl:grid-cols-[minmax(0,1fr)_300px] tw:max-bsxl:gap-10 tw:max-bslg:grid-cols-1">
              <div className="tw:min-w-0">
                {/* Contents on phones and tablets */}
                {toc.length > 1 ? (
                  <details className="tw:group tw:mb-8 tw:rounded-[20px] tw:bg-white tw:px-5 tw:py-1 tw:bslg:hidden tw:max-bssm:mx-(--inset)">
                    <summary className="tw:flex tw:cursor-pointer tw:items-center tw:justify-between tw:gap-3 tw:py-3.5 tw:text-[16px] tw:font-medium tw:text-(--ink)">
                      <span className="tw:flex tw:items-center tw:gap-2">
                        <FiList aria-hidden="true" /> On this page
                      </span>
                      <FiChevronDown
                        aria-hidden="true"
                        className="tw:transition-transform tw:group-open:rotate-180"
                      />
                    </summary>
                    <div className="tw:pb-3">
                      <Contents toc={toc} />
                    </div>
                  </details>
                ) : null}

                <article className="tw:rounded-(--r-xl) tw:bg-white tw:px-12 tw:py-12 tw:max-bsxl:px-10 tw:max-bssm:rounded-none tw:max-bssm:px-5 tw:max-bssm:py-8">
                  <div
                    className="rd-prose"
                    dangerouslySetInnerHTML={{ __html: introHtml }}
                  />
                  {restHtml ? (
                    <>
                      {showMidCta ? <MidCta /> : null}
                      <div
                        className={cx(
                          "rd-prose",
                          !showMidCta && "tw:mt-[1.15em]",
                        )}
                        dangerouslySetInnerHTML={{ __html: restHtml }}
                      />
                    </>
                  ) : null}

                  {faqs.length ? (
                    <section
                      className="tw:mt-14 tw:border-t tw:border-(--line) tw:pt-10"
                      aria-labelledby="bp-faqs-h"
                    >
                      <h2
                        id="bp-faqs-h"
                        className="tw:text-[clamp(26px,2.5vw,34px)] tw:leading-[1.2] tw:tracking-[-0.02em]"
                      >
                        Frequently Asked Questions
                      </h2>
                      <div className="tw:mt-6 tw:rounded-[22px] tw:bg-(--panel) tw:px-6 tw:py-1 tw:max-bssm:px-4">
                        {faqs.map((item, i) => (
                          <details
                            key={item.question}
                            open={i === 0}
                            className="tw:group tw:border-t tw:border-(--line) tw:first:border-t-0"
                          >
                            <summary className="tw:flex tw:cursor-pointer tw:items-center tw:justify-between tw:gap-4 tw:py-5 tw:text-(--ink)">
                              <h3 className="tw:text-[18px]/[1.4] tw:font-medium">
                                {item.question}
                              </h3>
                              <FiPlus
                                aria-hidden="true"
                                className="tw:size-5 tw:flex-none tw:transition-transform tw:duration-200 tw:group-open:rotate-45"
                              />
                            </summary>
                            <p className="tw:pb-5 tw:text-[17px]/[1.7] tw:text-(--text)">
                              {item.answer}
                            </p>
                          </details>
                        ))}
                      </div>
                    </section>
                  ) : null}

                  {afterHtml ? (
                    <div
                      className="rd-prose tw:mt-10"
                      dangerouslySetInnerHTML={{ __html: afterHtml }}
                    />
                  ) : null}
                </article>
              </div>

              {/* Sidebar. The contents and the audit card stay pinned while
                  you read; the contents list scrolls on its own
                  (data-lenis-prevent lets it scroll under Lenis smooth
                  scrolling, owner 24 Oct). Recent guides sit at the foot. */}
              <aside className="tw:flex tw:flex-col tw:gap-5 tw:max-bssm:px-(--inset)">
                {/* The pinned block sticks inside this wrapper, which ends above
                    "Recent guides", so it can never slide over that box. */}
                <div className="tw:flex-1">
                  <div className="tw:grid tw:gap-5 tw:bslg:sticky tw:bslg:top-28">
                    {toc.length > 1 ? (
                      <nav
                        aria-label="On this page"
                        data-lenis-prevent
                        className="tw:max-h-[max(220px,calc(100vh-500px))] tw:overflow-y-auto tw:overscroll-contain tw:rounded-[24px] tw:bg-white tw:p-5 tw:max-bslg:hidden"
                      >
                        <p className="tw:mb-2 tw:flex tw:items-center tw:gap-2 tw:px-2 tw:text-[13px] tw:font-semibold tw:tracking-[0.12em] tw:text-(--muted) tw:uppercase">
                          <FiList aria-hidden="true" /> On this page
                        </p>
                        <Contents toc={toc} />
                      </nav>
                    ) : null}

                    <div className="tw:relative tw:isolate tw:overflow-hidden tw:rounded-[24px] tw:bg-(--ink) tw:p-6 tw:text-white">
                      <span
                        className="tw:absolute tw:-top-16 tw:-right-12 tw:-z-1 tw:size-44 tw:rounded-full tw:bg-[radial-gradient(circle,rgba(37,103,232,0.4)_0%,rgba(37,103,232,0.4)_35%,transparent_70%)]"
                        aria-hidden="true"
                      />
                      <span className="tw:flex tw:items-center tw:gap-2 tw:text-[13px] tw:font-semibold tw:text-[#c9d4e8]">
                        <GoogleG className="tw:size-4" /> 5.0 on Google
                      </span>
                      <p className="tw:mt-3 tw:text-[21px]/[1.3] tw:font-medium tw:tracking-[-0.01em]">
                        Want this done for your business?
                      </p>
                      <p className="tw:mt-2 tw:text-[15px]/[1.6] tw:text-[#c9d4e8]">
                        Get a free audit of your Google profile, rankings and
                        website.
                      </p>
                      <div className="tw:mt-5 tw:grid tw:gap-2">
                        <Pill
                          href="/contact-us"
                          tone="white"
                          fullOnPhone
                          className="tw:w-full"
                        >
                          Get My Free Audit
                        </Pill>
                        <a
                          href={SITE_CONTACT.phoneHref}
                          className="tw:inline-flex tw:min-h-12 tw:items-center tw:justify-center tw:gap-2 tw:rounded-full tw:border tw:border-white/25 tw:text-[15px] tw:font-medium tw:text-white tw:hover:border-white"
                        >
                          <FiPhone aria-hidden="true" />
                          {SITE_CONTACT.phoneDisplay}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {recent.length ? (
                  <div className="tw:rounded-[24px] tw:bg-white tw:p-5">
                    <p className="tw:mb-4 tw:px-1 tw:text-[13px] tw:font-semibold tw:tracking-[0.12em] tw:text-(--muted) tw:uppercase">
                      Recent guides
                    </p>
                    <ul className="tw:grid tw:gap-4 tw:max-bslg:grid-cols-3 tw:max-bsmd:grid-cols-1">
                      {recent.map((post) => (
                        <li key={post.id}>
                          <Link
                            href={`${BLOG_BASE}/${post.slug}`}
                            className="tw:group tw:block tw:rounded-[16px] tw:p-1.5 tw:hover:bg-(--panel)"
                          >
                            <span className="tw:relative tw:block tw:aspect-[16/9] tw:overflow-hidden tw:rounded-[12px] tw:bg-(--panel)">
                              <Image
                                src={post.featuredImageUrl}
                                alt=""
                                fill
                                sizes="(max-width: 991px) 90vw, 320px"
                                className="tw:object-contain"
                              />
                            </span>
                            <span className="tw:mt-3 tw:block tw:px-1 tw:text-[15.5px]/[1.4] tw:font-medium tw:text-(--ink) tw:group-hover:text-(--blue)">
                              {post.blogTitle}
                            </span>
                            <span className="tw:mt-1 tw:block tw:px-1 tw:text-[13px] tw:text-(--muted)">
                              {formatShortDate(post.publishDate)}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </aside>
            </div>
          </Wrap>
        </Section>

        {/* ========================================================= RELATED */}
        {related.length ? (
          <Section labelledBy="bp-related-h" tone="white">
            <Wrap>
              <RelatedSlider posts={related} />
            </Wrap>
          </Section>
        ) : null}

        {/* ========================================================== BANNER */}
        <Section labelledBy="bp-close-h">
          <Wrap>
            <div className="tw:relative tw:isolate tw:overflow-hidden tw:rounded-[44px] tw:[background:radial-gradient(55%_80%_at_100%_0%,rgba(186,230,253,0.85),transparent_62%),radial-gradient(50%_70%_at_0%_100%,rgba(221,214,254,0.85),transparent_65%),linear-gradient(105deg,#ede9fe_0%,#e0f2fe_45%,#ecfccb_100%)] tw:px-10 tw:pt-16 tw:pb-16 tw:text-center tw:text-(--ink) tw:max-bssm:rounded-[28px] tw:max-bssm:px-4 tw:max-bssm:pt-10 tw:max-bssm:pb-14">
              <span
                className="tw:pointer-events-none tw:absolute tw:inset-0 tw:-z-1 tw:opacity-[0.12] tw:mix-blend-multiply"
                style={{ backgroundImage: GRAIN }}
                aria-hidden="true"
              />
              <BannerLoops
                id="bp-loop-l"
                className="tw:absolute tw:-bottom-6 tw:-left-6 tw:-z-1 tw:w-[clamp(180px,24vw,340px)] tw:max-bssm:w-[84px]"
              />
              <BannerLoops
                id="bp-loop-r"
                className="tw:absolute tw:-right-6 tw:-bottom-6 tw:-z-1 tw:w-[clamp(180px,24vw,340px)] tw:-scale-x-100 tw:max-bssm:w-[120px]"
              />
              <h2
                id="bp-close-h"
                className="tw:mx-auto tw:max-w-[900px] tw:text-[clamp(34px,4.4vw,64px)] tw:leading-[1.06] tw:tracking-[-0.035em] tw:text-balance"
              >
                Get Found First <InlinePin id="bp-pin" /> on Google Maps
              </h2>
              <p className="tw:mx-auto tw:mt-6 tw:max-w-[60ch] tw:text-lg/[1.65] tw:text-(--ink-2)">
                Local SEO, Google Business Profile, web design and Google Ads
                from one team. Start with a free audit.
              </p>
              <div className="tw:mt-9 tw:flex tw:flex-wrap tw:items-center tw:justify-center tw:gap-3">
                <Pill href="/contact-us" fullOnPhone>
                  Get My Free Audit
                </Pill>
                <a
                  href={SITE_CONTACT.phoneHref}
                  className="tw:inline-flex tw:min-h-14 tw:items-center tw:justify-center tw:gap-2 tw:rounded-full tw:border-[1.5px] tw:border-(--ink)/25 tw:bg-white/60 tw:px-7 tw:text-base tw:font-medium tw:text-(--ink) tw:transition tw:duration-200 tw:hover:-translate-y-0.5 tw:hover:bg-white tw:max-bssm:w-full"
                >
                  <FiPhone aria-hidden="true" />
                  {SITE_CONTACT.phoneDisplay}
                </a>
              </div>
            </div>
          </Wrap>
        </Section>
      </main>
      <Footer />
    </>
  );
}
