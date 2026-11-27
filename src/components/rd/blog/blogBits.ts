/* Shared helpers for the blog redesign drafts (24 Oct 2026). */

/** Where draft post links point. The drafts live at /blog-2 and
    /blog-2/[slug]; set this to "/blog" in the swap commit. */
export const BLOG_BASE = "/blog";

export function formatBlogDate(value: string) {
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export function formatShortDate(value: string) {
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

/** Reading time at ~230 words a minute, from the article HTML. */
export function readMinutes(html: string) {
  const words = html
    .replace(/<[^>]+>/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 230));
}

/** First letters of an author name, for the avatar circle. */
export function initials(name: string) {
  return (
    name
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0]?.toUpperCase())
      .join("") || "ZM"
  );
}

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/&[a-z]+;/g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 64) || "section";

const decode = (text: string) =>
  text
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&#39;|&rsquo;/g, "'")
    .replace(/&quot;|&ldquo;|&rdquo;/g, '"')
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

/**
 * Give every <h2> in the article an id (keeping any it already has) and
 * return the list for the "On this page" contents. Text, attributes and
 * order are untouched, and the tag still starts "<h2", so
 * splitAfterFirstSection keeps working.
 */
export function addHeadingIds(html: string) {
  const toc: { id: string; text: string }[] = [];
  const used = new Set<string>();
  const out = html.replace(
    /<h2\b([^>]*)>([\s\S]*?)<\/h2>/gi,
    (match, attrs: string, inner: string) => {
      const text = decode(inner);
      if (!text) return match;
      const existing = attrs.match(/\bid=["']([^"']+)["']/i)?.[1];
      let id = existing || slugify(text);
      if (!existing) {
        let n = 2;
        while (used.has(id)) id = `${slugify(text)}-${n++}`;
      }
      used.add(id);
      toc.push({ id, text });
      return existing ? match : `<h2 id="${id}"${attrs}>${inner}</h2>`;
    },
  );
  return { html: out, toc };
}

/* The CMS category (serviceTitle) is free text: 32 values for 64 posts,
   with near-duplicates ("Local SEO" / "Local seo") and typos ("r Google
   Listings"). The drafts group posts into a few clean topics from the
   category and the title; first match wins. */
const TOPICS: [string, RegExp][] = [
  [
    "Suspension & Reinstatement",
    /suspen|reinstat|appeal|keyword stuffing|duplicate|disabled|re-?verif/i,
  ],
  ["Google Ads", /google ads|\bppc\b|pay per click|adwords/i],
  ["Web Design", /web ?design|website design|web development/i],
  ["Real Estate", /real estate|zillow|realtor/i],
  ["Google Maps", /google maps?\b|map pack|maps ranking/i],
  [
    "Google Business Profile",
    /google business|\bgbp\b|google my business|\bgmb\b|google profile|google listing|\bnap\b/i,
  ],
  ["Local SEO", /seo|local|citation|ranking/i],
];

export function topicOf(post: { serviceTitle: string; blogTitle: string }) {
  const text = `${post.serviceTitle} ${post.blogTitle}`;
  return TOPICS.find(([, re]) => re.test(text))?.[0] ?? "Marketing";
}

/* Topic pages (/blog?topic=…) were removed on 27 Nov 2026 (owner): every
   filter URL showed up in Search Console, so /blog now 308s any ?topic=
   URL. topicOf still tags each card with its topic. */

/** Tag colour per topic (cards, featured card, post header). */
export const TOPIC_TONE: Record<string, string> = {
  "Suspension & Reinstatement": "tw:bg-[#d93025] tw:text-white",
  "Local SEO": "tw:bg-(--blue) tw:text-white",
  "Google Business Profile": "tw:bg-[#188038] tw:text-white",
  "Google Maps": "tw:bg-[#0d9488] tw:text-white",
  "Real Estate": "tw:bg-[#ea580c] tw:text-white",
  "Google Ads": "tw:bg-[#fbbc04] tw:text-(--ink)",
  "Web Design": "tw:bg-[#7c3aed] tw:text-white",
  Marketing: "tw:bg-(--ink) tw:text-white",
};

export const toneOf = (label: string) =>
  TOPIC_TONE[label] ?? "tw:bg-(--ink) tw:text-white";

export const PER_PAGE = 6;

export const PAGE_WINDOW = 5;

/** Page numbers to show: a window of PAGE_WINDOW pages around the current
    one, with no "…" gaps (owner, 27 Nov 2026). The window keeps the same
    length on every page, so the arrows never move: 1–5 on pages 1–3, then
    centred on the current page, ending at the last five. */
export function pageList(page: number, pages: number): number[] {
  const size = Math.min(PAGE_WINDOW, pages);
  const start = Math.min(
    Math.max(1, page - Math.floor(PAGE_WINDOW / 2)),
    pages - size + 1,
  );
  return Array.from({ length: size }, (_, i) => start + i);
}
