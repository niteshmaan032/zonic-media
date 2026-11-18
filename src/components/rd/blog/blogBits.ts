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

/** URL slug for a topic label (?topic=suspension-reinstatement). */
export const topicSlug = (label: string) =>
  label
    .toLowerCase()
    .replace(/&/g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

/* Topic pages (Nov 2026). A topic with at least MIN_TOPIC_POSTS guides is
   its own indexable page at /blog?topic=…, with its own canonical, heading,
   title and description, and is listed in the sitemap. Until 18 Nov every
   topic view canonicalised to /blog, so each topic (and each new one) sat in
   GSC as "Alternate page with proper canonical tag". Smaller topics get no
   topic link; their guides stay in the main list, and an old link to them
   redirects to /blog. A topic that reaches the minimum becomes a page on its
   own, so new posts never add a canonicalised URL. */
export const MIN_TOPIC_POSTS = 3;

export type BlogTopic = { slug: string; label: string; count: number };

/** Topics that have their own page, largest first. */
export function blogTopics(
  posts: { serviceTitle: string; blogTitle: string }[],
): BlogTopic[] {
  const counts = new Map<string, number>();
  for (const post of posts) {
    const label = topicOf(post);
    counts.set(label, (counts.get(label) ?? 0) + 1);
  }
  return [...counts.entries()]
    .filter(([, count]) => count >= MIN_TOPIC_POSTS)
    .sort((a, b) => b[1] - a[1])
    .map(([label, count]) => ({ slug: topicSlug(label), label, count }));
}

type TopicCopy = { h1: string; title: string; description: string; intro: string };

const TOPIC_COPY: Record<string, TopicCopy> = {
  "Suspension & Reinstatement": {
    h1: "Google Business Profile Suspension and Reinstatement Guides",
    title: "GBP Suspension & Reinstatement Guides | Zonic Media",
    description:
      "Why Google suspends Business Profiles, how to appeal, what evidence Google accepts and how long reinstatement takes, from a team with 900+ reinstatements.",
    intro:
      "Why profiles get suspended, how to file an appeal Google accepts, and what to do when one is denied.",
  },
  "Local SEO": {
    h1: "Local SEO Guides for Small Businesses",
    title: "Local SEO Guides for Small Businesses | Zonic Media",
    description:
      "Local SEO guides for small and service businesses: Google Maps rankings, local pages, citations, reviews and the factors that decide who ranks nearby.",
    intro:
      "How local rankings work and what to fix first, for businesses that want more calls from nearby searches.",
  },
  "Google Business Profile": {
    h1: "Google Business Profile Optimization Guides",
    title: "Google Business Profile Guides | Zonic Media",
    description:
      "How to set up and optimize a Google Business Profile: categories, description, photos, NAP and service areas, explained for small business owners.",
    intro:
      "Setting up and optimizing your Google Business Profile, from the primary category to photos and service areas.",
  },
  "Google Maps": {
    h1: "Google Maps Ranking Guides",
    title: "Google Maps Ranking Guides | Zonic Media",
    description:
      "How to rank in the Google Maps pack, turn map views into phone calls and get a listing back after it disappears from Google Maps.",
    intro:
      "Ranking in the map pack, turning map views into calls, and what to do when a listing disappears.",
  },
  "Real Estate": {
    h1: "Real Estate SEO Guides for Agents",
    title: "Real Estate SEO Guides for Agents | Zonic Media",
    description:
      "SEO and Google Business Profile guides for real estate agents: local rankings, your own leads versus portal leads, and choosing a real estate SEO company.",
    intro:
      "Local SEO and Google Business Profile help for agents who want their own leads, not just portal leads.",
  },
  "Google Ads": {
    h1: "Google Ads Guides for Local Businesses",
    title: "Google Ads Guides for Local Businesses | Zonic Media",
    description:
      "Google Ads guides for local businesses: what campaigns cost, how to set a starting budget and when paid search beats SEO.",
    intro:
      "Budgets, campaign setup and when paid search makes sense for a local business.",
  },
  "Web Design": {
    h1: "Website Design Guides for Small Businesses",
    title: "Website Design Guides for Small Businesses | Zonic Media",
    description:
      "Website design guides for small businesses: pages that turn visitors into calls, what a site needs to rank locally and how to brief a web designer.",
    intro:
      "What a small business website needs to rank locally and turn visitors into calls.",
  },
  Marketing: {
    h1: "Small Business Marketing Guides",
    title: "Small Business Marketing Guides | Zonic Media",
    description:
      "Marketing guides for small and local businesses: getting more leads from Google, fixing a website that gets traffic but no calls, and where to spend first.",
    intro:
      "Practical marketing help for small businesses that want more leads from the traffic they already get.",
  },
};

/** Heading, title, description and intro for a topic page. A topic added
    later gets this generated copy until it has its own entry above. */
export function topicCopy(topic: BlogTopic): TopicCopy {
  return (
    TOPIC_COPY[topic.label] ?? {
      h1: `${topic.label} Guides`,
      title: `${topic.label} Guides | Zonic Media Blog`,
      description: `Zonic Media guides on ${topic.label.toLowerCase()} for small and local businesses: ${topic.count} articles, newest first.`,
      intro: `Every Zonic Media guide on ${topic.label.toLowerCase()}, newest first.`,
    }
  );
}

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

/** Page numbers to show: first, last, current ±1, with gaps as null. */
export function pageList(page: number, pages: number): (number | null)[] {
  // Up to 12 pages, link every page number: with "1 2 3 … 11" the middle
  // pages were only reachable page by page, which left 34 guides more than
  // 3 clicks from the home page (Semrush crawl-depth notice, 26 Oct 2026).
  if (pages <= 12) return Array.from({ length: pages }, (_, i) => i + 1);
  const keep = new Set([1, pages, page - 1, page, page + 1]);
  const out: (number | null)[] = [];
  for (let n = 1; n <= pages; n++) {
    if (keep.has(n)) out.push(n);
    else if (out[out.length - 1] !== null) out.push(null);
  }
  return out;
}
