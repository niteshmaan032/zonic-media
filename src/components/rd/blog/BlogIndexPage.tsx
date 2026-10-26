import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiBookOpen,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";

import "@/components/rd/dfw-kit/kit.css";
import "@/components/rd/dfw-kit/ui.css";

import Footer from "@/app/components/Footer";
import {
  LEAD,
  Pill,
  Section,
  Strip,
  Wrap,
  cx,
} from "@/components/rd/dfw-kit/primitives";
import { BannerLoops, GRAIN } from "@/components/rd/dfw-kit/banner";
import { InlineChat } from "@/components/rd/dfw-kit/visuals";
import { SITE_CONTACT } from "@/shared/siteConfig";
import BlogGrid, { type BlogCardPost } from "./BlogGrid";
import {
  BLOG_BASE,
  PER_PAGE,
  formatBlogDate,
  initials,
  toneOf,
  topicOf,
  topicSlug,
} from "./blogBits";

/* ---------------------------------------------------------------------------
   BLOG LISTING — redesign draft (24 Oct 2026), /blog-2 (noindex).

   Listing copy re-optimized 24 Oct 2026 (Semrush US: local seo blog,
   local seo tips, google business profile help, how to rank on google
   maps, ai search optimization, small business marketing tips): new H1,
   intro, grid heading and closing banner; post titles and summaries come
   from the CMS untouched. The audit banner lists phone, email and address
   (copy brief rule 9). Featured card for the newest guide (page 1,
   no topic), then 6 cards a page with numbered pagination. Pages and
   topics are real URLs (?page=, ?topic=) rendered on the server, so every
   guide keeps a crawlable link from the blog; that replaces the long
   "All guides" list (removed at the owner's request, 24 Oct). Search runs
   in the browser over all guides. Light closing banner.
--------------------------------------------------------------------------- */

export function BlogIndexPage({
  all,
  page: requested,
  topic,
}: {
  all: BlogCardPost[];
  page: number;
  topic: string | null;
}) {
  const [featured] = all;

  const counts = new Map<string, number>();
  for (const p of all) {
    const t = topicOf(p);
    counts.set(t, (counts.get(t) ?? 0) + 1);
  }
  const topics = [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([label, count]) => ({ slug: topicSlug(label), label, count }));
  const active = topics.find((t) => t.slug === topic) ?? null;

  // Pool for the grid: one topic, or everything after the featured guide.
  const pool = active
    ? all.filter((p) => topicSlug(topicOf(p)) === active.slug)
    : all.slice(1);
  const pages = Math.max(1, Math.ceil(pool.length / PER_PAGE));
  const page = Math.min(Math.max(1, requested), pages);
  const pagePosts = pool.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  const showFeatured = Boolean(featured) && !active && page === 1;

  return (
    <>
      <main className="dk-root">
        {/* ============================================================ HERO */}
        <section
          className="tw:relative tw:isolate tw:overflow-clip tw:[background:radial-gradient(circle_at_14%_10%,rgba(37,103,232,0.10),transparent_28%),radial-gradient(circle_at_86%_8%,rgba(155,140,242,0.12),transparent_26%),linear-gradient(180deg,#fbfcff_0%,#f6f8fd_100%)] tw:pt-36 tw:pb-(--sec-y) tw:max-bsmd:pt-[120px]"
          aria-labelledby="bl-h1"
        >
          <Wrap className="tw:text-center">
            <Strip
              as="h1"
              id="bl-h1"
              size="heroWide"
              className="tw:mx-auto tw:max-w-[900px] tw:text-balance"
            >
              Local SEO Tips and Google Business Profile Guides
            </Strip>
            <p
              className={cx(
                LEAD,
                "tw:mx-auto tw:mt-6 tw:max-w-[640px] tw:text-balance",
              )}
            >
              Plain-English help for small business owners: ranking on Google
              Maps, fixing a suspended profile, earning reviews, showing up in
              AI search and turning your website and ads into booked calls.
            </p>
            <span className="tw:mt-7 tw:inline-flex tw:items-center tw:gap-2 tw:rounded-full tw:border tw:border-(--line) tw:bg-white tw:px-4 tw:py-2 tw:text-[14px] tw:font-medium tw:text-(--ink-2)">
              <FiBookOpen aria-hidden="true" className="tw:text-(--blue)" />
              {all.length} guides · {topics.length} topics
            </span>
          </Wrap>

          {/* Featured: the newest guide (16:9 image, never cropped) */}
          {showFeatured ? (
            <Wrap>
              <article className="tw:group tw:relative tw:mx-auto tw:mt-14 tw:grid tw:max-w-[1180px] tw:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] tw:items-center tw:overflow-hidden tw:rounded-(--r-xl) tw:bg-white tw:text-left tw:[box-shadow:0_40px_80px_-60px_rgba(12,21,38,0.5)] tw:max-bslg:grid-cols-1 tw:max-bssm:mt-10">
                <div className="tw:relative tw:aspect-[16/9] tw:overflow-hidden tw:bg-(--panel)">
                  <Image
                    src={featured.featuredImageUrl}
                    alt={featured.blogTitle}
                    fill
                    priority
                    sizes="(max-width: 991px) 100vw, 680px"
                    className="tw:object-contain tw:transition-transform tw:duration-500 tw:group-hover:scale-[1.02]"
                  />
                </div>
                <div className="tw:flex tw:flex-col tw:justify-center tw:px-10 tw:py-9 tw:max-bssm:px-6 tw:max-bssm:py-7">
                  <span className="tw:flex tw:flex-wrap tw:items-center tw:gap-2 tw:text-[13px] tw:font-semibold">
                    <span className="tw:rounded-full tw:bg-(--ink) tw:px-3 tw:py-1 tw:text-white">
                      Latest guide
                    </span>
                    <span
                      className={cx(
                        "tw:rounded-full tw:px-3 tw:py-1",
                        toneOf(topicOf(featured)),
                      )}
                    >
                      {topicOf(featured)}
                    </span>
                  </span>
                  <h2 className="tw:mt-5 tw:text-[clamp(26px,2.4vw,36px)] tw:leading-[1.15] tw:tracking-[-0.025em] tw:text-balance">
                    <Link
                      href={`${BLOG_BASE}/${featured.slug}`}
                      className="tw:after:absolute tw:after:inset-0 tw:after:content-['']"
                    >
                      {featured.blogTitle}
                    </Link>
                  </h2>
                  <p className="tw:mt-4 tw:text-[17px]/[1.65] tw:text-(--text)">
                    {featured.excerpt}
                  </p>
                  <span className="tw:mt-6 tw:flex tw:items-center tw:gap-3 tw:text-[14px] tw:text-(--muted)">
                    <span className="tw:grid tw:size-9 tw:place-items-center tw:rounded-full tw:bg-(--blue) tw:text-[13px] tw:font-semibold tw:text-white">
                      {initials(featured.authorName)}
                    </span>
                    <span>
                      <b className="tw:block tw:font-medium tw:text-(--ink)">
                        {featured.authorName}
                      </b>
                      {formatBlogDate(featured.publishDate)}
                    </span>
                    <span className="tw:ml-auto tw:inline-flex tw:items-center tw:gap-2 tw:font-medium tw:text-(--blue)">
                      Read guide
                      <FiArrowRight
                        aria-hidden="true"
                        className="tw:transition-transform tw:group-hover:translate-x-[3px]"
                      />
                    </span>
                  </span>
                </div>
              </article>
            </Wrap>
          ) : null}
        </section>

        {/* ============================================================ GRID */}
        <Section id="guides" labelledBy="bl-latest-h">
          <Wrap>
            {/* Heading left, intro beside it (owner, 26 Oct 2026). */}
            <div className="tw:mb-9 tw:grid tw:grid-cols-[minmax(0,1fr)_minmax(0,440px)] tw:items-start tw:gap-12 tw:max-bslg:grid-cols-1 tw:max-bslg:gap-5">
              <Strip id="bl-latest-h">
                {active
                  ? `${active.label} Guides`
                  : "New Local SEO and Small Business Marketing Guides"}
              </Strip>
              <p className={cx(LEAD, "tw:max-w-[460px] tw:bslg:pt-2")}>
                {active
                  ? `${active.count} guides on ${active.label.toLowerCase()}, newest first.`
                  : "Browse by topic or search every guide: Google Business Profile, Google Maps rankings, AI search, websites and Google Ads."}
              </p>
            </div>
            <BlogGrid
              all={all}
              posts={pagePosts}
              page={page}
              pages={pages}
              topic={active?.slug ?? null}
              topics={topics}
              total={all.length}
            />
          </Wrap>
        </Section>

        {/* ========================================================== BANNER */}
        {/* Light gradient (changed 24 Oct): aqua → sky → lavender with a
            peach glow, ink text. */}
        <Section labelledBy="bl-close-h">
          <Wrap flushOnPhone>
            <div className="tw:relative tw:isolate tw:overflow-hidden tw:rounded-[44px] tw:[background:radial-gradient(55%_80%_at_100%_0%,rgba(253,186,116,0.45),transparent_62%),radial-gradient(50%_70%_at_0%_100%,rgba(153,246,228,0.8),transparent_65%),linear-gradient(105deg,#ccfbf1_0%,#e0f2fe_45%,#ede9fe_100%)] tw:px-10 tw:pt-[88px] tw:pb-[84px] tw:text-center tw:text-(--ink) tw:max-bssm:rounded-[28px] tw:max-bssm:px-5 tw:max-bssm:pt-16 tw:max-bssm:pb-28">
              <span
                className="tw:pointer-events-none tw:absolute tw:inset-0 tw:-z-1 tw:opacity-[0.12] tw:mix-blend-multiply"
                style={{ backgroundImage: GRAIN }}
                aria-hidden="true"
              />
              <BannerLoops
                id="bl-loop-l"
                className="tw:absolute tw:-bottom-6 tw:-left-6 tw:-z-1 tw:w-[clamp(180px,24vw,340px)] tw:max-bssm:w-[120px]"
              />
              <BannerLoops
                id="bl-loop-r"
                className="tw:absolute tw:-right-6 tw:-bottom-6 tw:-z-1 tw:w-[clamp(180px,24vw,340px)] tw:-scale-x-100 tw:max-bssm:w-[120px]"
              />
              <h2
                id="bl-close-h"
                className="tw:mx-auto tw:max-w-[960px] tw:text-[clamp(34px,4.4vw,64px)] tw:leading-[1.06] tw:tracking-[-0.035em] tw:text-balance"
              >
                Want Us <InlineChat id="bl-chat" /> to Handle Your Local SEO?
              </h2>
              <p className="tw:mx-auto tw:mt-6 tw:max-w-[60ch] tw:text-lg/[1.65] tw:text-(--ink-2)">
                Request a free local SEO audit. We check your Google Business
                Profile, Maps rankings and website, then send the quickest fixes
                for more calls.
              </p>
              <div className="tw:mt-9 tw:flex tw:flex-wrap tw:items-center tw:justify-center tw:gap-3">
                <Pill href="/contact-us" fullOnPhone>
                  Request My Free Audit
                </Pill>
                <a
                  href={SITE_CONTACT.phoneHref}
                  className="tw:inline-flex tw:min-h-14 tw:items-center tw:justify-center tw:gap-2 tw:rounded-full tw:border-[1.5px] tw:border-(--ink)/25 tw:bg-white/60 tw:px-7 tw:text-base tw:font-medium tw:text-(--ink) tw:transition tw:duration-200 tw:hover:-translate-y-0.5 tw:hover:bg-white tw:max-bssm:w-full"
                >
                  <FiPhone aria-hidden="true" />
                  {SITE_CONTACT.phoneDisplay}
                </a>
              </div>
              {/* Compact contact list (copy brief rule 9: phone, email and
                  address on every audit block; the phone is the button). */}
              <ul className="tw:mt-7 tw:flex tw:flex-wrap tw:items-center tw:justify-center tw:gap-x-6 tw:gap-y-2 tw:text-[15px] tw:text-(--ink-2)">
                <li>
                  <a
                    href={SITE_CONTACT.emailHref}
                    className="tw:inline-flex tw:items-center tw:gap-2 tw:underline-offset-[3px] tw:hover:underline"
                  >
                    <FiMail aria-hidden="true" />
                    {SITE_CONTACT.email}
                  </a>
                </li>
                <li>
                  <a
                    href={SITE_CONTACT.mapHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tw:inline-flex tw:items-center tw:gap-2 tw:underline-offset-[3px] tw:hover:underline"
                  >
                    <FiMapPin aria-hidden="true" />
                    {SITE_CONTACT.address}
                  </a>
                </li>
              </ul>
            </div>
          </Wrap>
        </Section>
      </main>
      <Footer />
    </>
  );
}
